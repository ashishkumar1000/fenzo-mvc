/**
 * Jobzo Technician Flow
 * Technician account setup and job management
 */

import { useState, useEffect, ChangeEvent } from 'react'
import { Button, Input, Badge, Avatar } from '@/components'
import styles from './TechnicianFlow.module.css'
import {
  Home,
  Clock,
  User,
  LogOut,
  Phone,
  Bell,
  MapPin,
  CheckCircle,
  ArrowLeft,
  MessageCircle,
  Zap,
  Calendar,
} from 'lucide-react'

type TechnicianStep = 'setup1' | 'setup2' | 'home' | 'jobDetail' | 'jobComplete' | 'history' | 'messaging' | 'profile'

interface JobProgress {
  step: number
  label: string
  completed: boolean
}

const JOB_STEPS: JobProgress[] = [
  { step: 1, label: 'On my way', completed: false },
  { step: 2, label: 'Arrived at location', completed: false },
  { step: 3, label: 'Job in progress', completed: false },
  { step: 4, label: 'Upload photos', completed: false },
  { step: 5, label: 'Get customer signature', completed: false },
  { step: 6, label: 'Mark complete', completed: false },
]

export function TechnicianFlow({ onBack, initialStep }: { onBack?: () => void; initialStep?: TechnicianStep }) {
  const [currentStep, setCurrentStep] = useState<TechnicianStep>(initialStep || 'setup1')
  const [technicianInfo, setTechnicianInfo] = useState({
    name: '',
    phone: '',
    businessName: '',
  })
  const [selectedJob, setSelectedJob] = useState<string | null>(null)
  const [jobProgress, setJobProgress] = useState<JobProgress[]>(JOB_STEPS)

  const handleSetup1Submit = () => {
    setCurrentStep('setup2')
  }

  const handleSetup2Submit = () => {
    setCurrentStep('home')
  }

  const handleJobSelect = (jobId: string) => {
    setSelectedJob(jobId)
    setCurrentStep('jobDetail')
  }

  const handleJobStepComplete = (stepNum: number) => {
    setJobProgress(prev =>
      prev.map(s => (s.step === stepNum ? { ...s, completed: true } : s))
    )
  }

  const handleMarkComplete = () => {
    setCurrentStep('jobComplete')
  }

  const handleViewNextJob = () => {
    setCurrentStep('home')
    setSelectedJob(null)
    setJobProgress(JOB_STEPS)
  }

  const handleTabChange = (tab: TechnicianStep) => {
    setCurrentStep(tab)
    setSelectedJob(null)
  }

  return (
    <div className={styles.container}>
      {currentStep === 'setup1' && (
        <TechnicianSetup1
          info={technicianInfo}
          onInfoChange={setTechnicianInfo}
          onSubmit={handleSetup1Submit}
        />
      )}

      {currentStep === 'setup2' && (
        <TechnicianSetup2
          info={technicianInfo}
          onInfoChange={setTechnicianInfo}
          onSubmit={handleSetup2Submit}
          onBack={() => setCurrentStep('setup1')}
        />
      )}

      {currentStep === 'home' && !selectedJob && (
        <>
          <HomeScreen onSelectJob={handleJobSelect} />
          <BottomNav
            activeTab="home"
            onTabChange={handleTabChange}
          />
        </>
      )}

      {currentStep === 'jobDetail' && selectedJob && (
        <>
          <JobDetailScreen
            jobId={selectedJob}
            progress={jobProgress}
            onStepComplete={handleJobStepComplete}
            onMarkComplete={handleMarkComplete}
            onMessages={() => setCurrentStep('messaging')}
            onBack={() => {
              setCurrentStep('home')
              setSelectedJob(null)
            }}
          />
        </>
      )}

      {currentStep === 'jobComplete' && (
        <JobCompletionScreen onViewNext={handleViewNextJob} />
      )}

      {currentStep === 'history' && (
        <>
          <HistoryScreen />
          <BottomNav
            activeTab="history"
            onTabChange={handleTabChange}
          />
        </>
      )}

      {currentStep === 'messaging' && (
        <MessagingScreen />
      )}

      {currentStep === 'profile' && (
        <>
          <ProfileScreen onLogout={onBack} />
          <BottomNav
            activeTab="profile"
            onTabChange={handleTabChange}
          />
        </>
      )}
    </div>
  )
}

interface SetupProps {
  info: { name: string; phone: string; businessName: string }
  onInfoChange: (info: { name: string; phone: string; businessName: string }) => void
  onSubmit: () => void
  onBack?: () => void
}

function TechnicianSetup1({ info, onInfoChange, onSubmit }: SetupProps) {
  return (
    <div className={styles.setupContainer}>
      <div className={styles.setupHeader}>
        <h1>Technician Setup</h1>
        <p>Let's get you started with Jobzo</p>
      </div>

      <div className={styles.formGroup}>
        <label>Your name</label>
        <Input
          value={info.name}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onInfoChange({ ...info, name: e.target.value })
          }
          placeholder="e.g. Suresh Kumar"
        />
      </div>

      <div className={styles.formGroup}>
        <label>Phone number</label>
        <Input
          type="tel"
          value={info.phone}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onInfoChange({ ...info, phone: e.target.value })
          }
          placeholder="+91 98765 11223"
        />
      </div>

      <Button variant="primary" fullWidth onClick={onSubmit}>
        Continue
      </Button>
    </div>
  )
}

function TechnicianSetup2({
  info,
  onInfoChange,
  onSubmit,
  onBack,
}: SetupProps & { onBack: () => void }) {
  return (
    <div className={styles.setupContainer}>
      <button className={styles.backButton} onClick={onBack}>
        ← Back
      </button>

      <div className={styles.setupHeader}>
        <h1>Business Information</h1>
        <p>Which business do you work for?</p>
      </div>

      <div className={styles.formGroup}>
        <label>Business name</label>
        <Input
          value={info.businessName}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onInfoChange({ ...info, businessName: e.target.value })
          }
          placeholder="e.g. Cool Air AC Services"
        />
      </div>

      <Button variant="primary" fullWidth onClick={onSubmit}>
        Start Working
      </Button>
    </div>
  )
}

interface HomeScreenProps {
  onSelectJob: (jobId: string) => void
}

function HomeScreen({ onSelectJob }: HomeScreenProps) {
  const today = new Date()
  const dayName = today.toLocaleDateString('en-US', { weekday: 'short' })
  const date = today.getDate()

  return (
    <div className={styles.mainContent}>
      <div className={styles.header}>
        <div className={styles.headerTop}>
          <div>
            <h1 className={styles.greeting}>Good morning, Suresh</h1>
            <p className={styles.business}>Cool Air AC Services</p>
          </div>
          <button className={styles.notificationIcon}>
            <Bell size={24} />
          </button>
        </div>

        <div className={styles.statsContainer}>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>₹</div>
            <div className={styles.statText}>
              <div className={styles.statValue}>4,200</div>
              <div className={styles.statLabel}>Earned today</div>
            </div>
          </div>
          <div className={styles.statCard}>
            <Clock size={20} className={styles.statIcon} />
            <div className={styles.statText}>
              <div className={styles.statValue}>3</div>
              <div className={styles.statLabel}>Jobs left</div>
            </div>
          </div>
        </div>

        <div className={styles.calendarRow}>
          {['Mon 9', 'Tue 10', 'Wed 11', 'Thu 12', 'Fri 13', 'Sat 14', 'Sun 15'].map(
            (d) => (
              <button
                key={d}
                className={`${styles.calendarDay} ${
                  d === `${dayName} ${date}` ? styles.active : ''
                }`}
              >
                {d}
              </button>
            )
          )}
        </div>
      </div>

      <div className={styles.jobsSection}>
        <h2>Today's jobs</h2>
        <a href="#" className={styles.jobsCount}>
          4 jobs
        </a>
      </div>

      <div className={styles.jobsList}>
        {[
          {
            id: '1',
            time: '9:30 AM',
            customer: 'Aarti Deshmukh',
            service: 'AC Service',
            location: 'Lokhandwala, Andheri West',
            status: 'Done',
          },
          {
            id: '2',
            time: '11:00 AM',
            customer: 'Ramesh Kumar',
            service: 'AC Service',
            location: 'Sea View Road, Bandra West',
            status: 'In Progress',
          },
          {
            id: '3',
            time: '2:00 PM',
            customer: 'Priya Sharma',
            service: 'AC Service',
            location: 'Sunshine Apartments, Andheri West',
            status: 'Scheduled',
          },
        ].map((job) => (
          <div
            key={job.id}
            className={styles.jobCard}
            onClick={() => onSelectJob(job.id)}
          >
            <div className={styles.jobCardTop}>
              <div className={styles.jobTime}>{job.time}</div>
              <div className={styles.jobContent}>
                <h3>{job.customer}</h3>
                <p className={styles.jobService}>
                  <MessageCircle size={14} />
                  {job.service}
                </p>
                <p className={styles.jobLocation}>
                  <MapPin size={14} />
                  {job.location}
                </p>
              </div>
              <Badge status={
                job.status === 'Done' ? 'done' :
                job.status === 'In Progress' ? 'progress' :
                'scheduled'
              }>
                {job.status}
              </Badge>
            </div>
            <div className={`${styles.jobStatus} ${styles[`status${job.status.replace(' ', '')}`]}`}>
              {job.status === 'Done' && (
                <>
                  <CheckCircle size={16} style={{ display: 'inline-block', marginRight: '6px' }} />
                  Completed
                </>
              )}
              {job.status === 'In Progress' && (
                <>
                  <Zap size={16} style={{ display: 'inline-block', marginRight: '6px' }} />
                  In progress — continue
                </>
              )}
              {job.status === 'Scheduled' && (
                <>
                  <Calendar size={16} style={{ display: 'inline-block', marginRight: '6px' }} />
                  Scheduled
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

interface JobDetailScreenProps {
  jobId: string
  progress: JobProgress[]
  onStepComplete: (step: number) => void
  onMarkComplete: () => void
  onBack: () => void
  onMessages?: () => void
}

function JobDetailScreen({
  jobId,
  progress,
  onStepComplete,
  onMarkComplete,
  onBack,
  onMessages,
}: JobDetailScreenProps) {
  const currentStep = progress.findIndex((s) => !s.completed) + 1
  const allStepsComplete = progress.every((s) => s.completed)

  const handleStepClick = (stepNum: number) => {
    if (stepNum === currentStep) {
      onStepComplete(stepNum)
    }
  }

  useEffect(() => {
    if (allStepsComplete) {
      onMarkComplete()
    }
  }, [allStepsComplete, onMarkComplete])

  return (
    <div className={styles.mainContent}>
      <div className={styles.jobDetailHeader}>
        <button onClick={onBack} className={styles.backButton}>
          ← Job #{jobId}
        </button>
      </div>

      <div className={styles.customerCard}>
        <div className={styles.customerInfo}>
          <Avatar initials="RK" />
          <div>
            <h3>Ramesh Kumar</h3>
            <p>AC Service</p>
          </div>
        </div>
        <div className={styles.customerActions}>
          <button className={styles.actionButton}>
            <MapPin size={20} />
          </button>
          <button className={styles.actionButton} onClick={onMessages}>
            <MessageCircle size={20} />
          </button>
          <button className={styles.actionButton}>
            <Phone size={20} />
          </button>
        </div>
      </div>

      <div className={styles.serviceCard}>
        <h4>Service</h4>
        <p className={styles.serviceType}>AC gas refill + cleaning</p>
        <p className={styles.serviceDetails}>
          Estimated time: 1h 30m · From owner: "Customer says cooling dropped after
          monsoon."
        </p>
      </div>

      <div className={styles.progressContainer}>
        {progress.map((item) => (
          <div key={item.step} className={styles.progressItem}>
            <button
              type="button"
              className={`${styles.progressCircle} ${
                item.completed ? styles.completed : item.step === currentStep ? styles.active : ''
              }`}
              onClick={() => handleStepClick(item.step)}
            >
              {item.completed ? (
                <CheckCircle size={28} />
              ) : (
                item.step
              )}
            </button>
            <div
              className={styles.progressLabel}
              onClick={() => handleStepClick(item.step)}
              style={{ cursor: item.step === currentStep ? 'pointer' : 'default' }}
            >
              <h4>{item.label}</h4>
              {item.step === currentStep && (
                <p className={styles.actionText}>Tap to {item.step === 5 ? 'capture signature' : 'confirm'} →</p>
              )}
              {item.step === 4 && (
                <Badge variant="secondary">Optional</Badge>
              )}
            </div>
          </div>
        ))}
      </div>

      {!allStepsComplete && (
        <textarea
          className={styles.notesField}
          placeholder="Add notes for the office..."
          defaultValue=""
        />
      )}
    </div>
  )
}

function JobCompletionScreen({ onViewNext }: { onViewNext: () => void }) {
  return (
    <div className={styles.completionContainer}>
      <div className={styles.completionContent}>
        <div className={styles.successIcon}>
          <CheckCircle size={56} />
        </div>
        <h1>Job done!</h1>
        <p>Priya will receive her invoice on WhatsApp automatically.</p>

        <div className={styles.completionDetails}>
          <div className={styles.detailRow}>
            <span>Customer</span>
            <strong>Priya Sharma</strong>
          </div>
          <div className={styles.detailRow}>
            <span>Service</span>
            <strong>AC gas refill</strong>
          </div>
          <div className={styles.detailRow}>
            <span>Time taken</span>
            <strong>1h 23m</strong>
          </div>
          <div className={styles.detailRow}>
            <span>Photos uploaded</span>
            <strong>3</strong>
          </div>
          <div className={styles.detailRow}>
            <span>Signature</span>
            <strong className={styles.capturedBadge}>✓ Captured</strong>
          </div>
        </div>

        <Button variant="primary" fullWidth onClick={onViewNext}>
          View next job →
        </Button>

        <button className={styles.linkButton}>Back to my jobs</button>
      </div>
    </div>
  )
}

interface ProfileScreenProps {
  onLogout?: () => void
}

function ProfileScreen({ onLogout }: ProfileScreenProps) {
  return (
    <div className={styles.mainContent}>
      <div className={styles.profileHeader}>
        <Avatar initials="SK" size="lg" />
        <h1>Suresh Kumar</h1>
        <p>AC Technician · Cool Air AC Services</p>
      </div>

      <div className={styles.statsGrid}>
        <div className={styles.statBox}>
          <div className={styles.statNumber}>128</div>
          <div className={styles.statText}>Jobs done</div>
        </div>
        <div className={styles.statBox}>
          <div className={styles.statNumber}>4.9</div>
          <div className={styles.statText}>Rating</div>
        </div>
      </div>

      <div className={styles.profileCard}>
        <div className={styles.profileRow}>
          <Phone size={20} />
          <span>+91 98765 11223</span>
        </div>
        <div className={styles.profileRow}>
          <Bell size={20} />
          <span>Notifications</span>
          <span className={styles.arrow}>›</span>
        </div>
        <div className={styles.profileRow} onClick={onLogout}>
          <LogOut size={20} className={styles.logoutIcon} />
          <span className={styles.logoutText}>Log out</span>
        </div>
      </div>
    </div>
  )
}

function HistoryScreen() {
  const completedJobs = [
    {
      id: '1',
      date: '13 Jun',
      customer: 'Sunita Rao',
      service: 'AC Service',
      amount: '₹1,200',
      status: 'done',
    },
    {
      id: '2',
      date: '13 Jun',
      customer: 'Imtiaz Ali',
      service: 'AC Installation',
      amount: '₹4,500',
      status: 'done',
    },
    {
      id: '3',
      date: '12 Jun',
      customer: 'Neha Kulkarni',
      service: 'AC Service',
      amount: '₹900',
      status: 'done',
    },
    {
      id: '4',
      date: '12 Jun',
      customer: 'Rohit Shah',
      service: 'AC Service',
      amount: '—',
      status: 'cancelled',
    },
    {
      id: '5',
      date: '11 Jun',
      customer: 'Kavita Menon',
      service: 'AC Gas Refill',
      amount: '₹1,416',
      status: 'done',
    },
  ]

  return (
    <div className={styles.mainContent}>
      <div className={styles.historyHeader}>
        <h1>My jobs</h1>
      </div>

      <div className={styles.filterButtons}>
        <button className={`${styles.filterBtn} ${styles.active}`}>All</button>
        <button className={styles.filterBtn}>This week</button>
        <button className={styles.filterBtn}>This month</button>
      </div>

      <div className={styles.jobsList}>
        {completedJobs.map((job) => (
          <div key={job.id} className={styles.historyJobCard}>
            <div className={styles.jobCardTop}>
              <div className={styles.jobTime}>{job.date}</div>
              <div className={styles.jobContent}>
                <h3>{job.customer}</h3>
                <p className={styles.jobService}>
                  <MessageCircle size={14} />
                  {job.service}
                </p>
              </div>
              <div className={styles.jobAmount}>{job.amount}</div>
              <Badge status={job.status}>
                {job.status === 'done' ? 'Completed' : 'Cancelled'}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

interface Message {
  id: string
  type: 'received' | 'sent'
  text: string
  timestamp: string
}

function MessagingScreen() {
  const [messages] = useState<Message[]>([
    {
      id: '1',
      type: 'received',
      text: 'Hi Priya! 👋\n\nYour AC Service is confirmed with Cool Air AC Services.',
      timestamp: '10:24 AM',
    },
    {
      id: '2',
      type: 'received',
      text: '📅 Tuesday, 17 June\n⏰ 2:00 PM – 4:00 PM\n👨 Technician: Suresh Kumar\n\nWe\'ll message you when he\'s on his way. Queries? Call 98765 43210',
      timestamp: '10:24 AM',
    },
    {
      id: '3',
      type: 'received',
      text: 'Hi Priya! Your technician Suresh is on his way 🚗\n\nExpected arrival: 2:15 PM\n\nYou can reach him at 87654 32109',
      timestamp: '1:52 PM',
    },
    {
      id: '4',
      type: 'received',
      text: 'Hi Priya! Your AC service is complete ✅\n\nInvoice #JB-INV-0042\nAC Gas Refill + Cleaning\nAmount: ₹1,200 + GST\n\nPay now 👇',
      timestamp: '3:31 PM',
    },
    {
      id: '5',
      type: 'sent',
      text: '₹ Pay ₹1,416',
      timestamp: '3:31 PM',
    },
    {
      id: '6',
      type: 'received',
      text: 'Thank you! Paid 🙏',
      timestamp: '3:34 PM',
    },
  ])

  return (
    <div className={styles.messagingContainer}>
      <div className={styles.messagingHeader}>
        <div className={styles.messagingHeaderTop}>
          <button className={styles.backButton}>←</button>
          <div className={styles.messagingHeaderInfo}>
            <h2>Cool Air AC Services</h2>
            <p>business account</p>
          </div>
          <div className={styles.messagingHeaderIcons}>
            <button><Phone size={20} /></button>
            <button><Bell size={20} /></button>
          </div>
        </div>
      </div>

      <div className={styles.dateFilter}>
        <button className={styles.dateButton}>TODAY</button>
      </div>

      <div className={styles.messagesList}>
        {messages.map((message) => (
          <div
            key={message.id}
            className={`${styles.messageWrapper} ${
              message.type === 'sent' ? styles.sentMessage : styles.receivedMessage
            }`}
          >
            <div className={styles.messageBubble}>
              <p>{message.text}</p>
              <span className={styles.messageTime}>{message.timestamp}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

interface BottomNavProps {
  activeTab: 'home' | 'history' | 'profile'
  onTabChange: (tab: TechnicianStep) => void
}

function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <div className={styles.bottomNav}>
      <button
        className={`${styles.navButton} ${activeTab === 'home' ? styles.active : ''}`}
        onClick={() => onTabChange('home')}
      >
        <Home size={24} />
        <span>Today</span>
      </button>
      <button
        className={`${styles.navButton} ${activeTab === 'history' ? styles.active : ''}`}
        onClick={() => onTabChange('history')}
      >
        <Clock size={24} />
        <span>History</span>
      </button>
      <button
        className={`${styles.navButton} ${activeTab === 'profile' ? styles.active : ''}`}
        onClick={() => onTabChange('profile')}
      >
        <User size={24} />
        <span>Profile</span>
      </button>
    </div>
  )
}
