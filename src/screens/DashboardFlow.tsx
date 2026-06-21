import { useState } from 'react'
import { Button, Card, Badge, Avatar } from '@/components'
import styles from './DashboardFlow.module.css'
import {
  Home,
  Briefcase,
  Users,
  MoreHorizontal,
  Bell,
  Calendar,
  Clock,
  Users2,
  CreditCard,
  Wrench,
  Bug,
  Zap,
  Package,
  User,
  LogOut,
  Phone,
  MessageCircle,
  AirVent,
  MapPin,
  ChevronRight,
  X,
  ArrowLeft,
  CheckCircle,
  Plus,
} from 'lucide-react'

export function DashboardFlow() {
  const [currentTab, setCurrentTab] = useState('home')
  const [showNewJobModal, setShowNewJobModal] = useState(false)
  const [selectedJob, setSelectedJob] = useState<string | null>(null)
  const [newJobStep, setNewJobStep] = useState(1)
  const [newJobData, setNewJobData] = useState({
    serviceType: 'AC Service',
    customer: '',
    date: '17 Jun 2026',
    time: '2:00 PM',
    technician: 'SK',
  })

  const handleTabChange = (tab: string) => {
    setCurrentTab(tab)
    setShowNewJobModal(false)
    setSelectedJob(null)
  }

  return (
    <div className={styles.container}>
      {currentTab === 'home' && (
        <HomeScreen onNewJob={() => setShowNewJobModal(true)} />
      )}
      {currentTab === 'jobs' && (
        <JobsScreen onSelectJob={setSelectedJob} selectedJob={selectedJob} />
      )}
      {currentTab === 'customers' && <CustomersScreen />}
      {currentTab === 'more' && <MoreScreen />}

      {/* Bottom Navigation */}
      <div className={styles.bottomNav}>
        <NavTab
          icon={Home}
          label="Home"
          active={currentTab === 'home'}
          onClick={() => handleTabChange('home')}
        />
        <NavTab
          icon={Briefcase}
          label="Jobs"
          active={currentTab === 'jobs'}
          onClick={() => handleTabChange('jobs')}
        />
        <NavTab
          icon={Users}
          label="Customers"
          active={currentTab === 'customers'}
          onClick={() => handleTabChange('customers')}
        />
        <NavTab
          icon={MoreHorizontal}
          label="More"
          active={currentTab === 'more'}
          onClick={() => handleTabChange('more')}
        />
      </div>

      {/* New Job Modal */}
      {showNewJobModal && (
        <div className={styles.modal}>
          <NewJobModal
            step={newJobStep}
            onStepChange={setNewJobStep}
            data={newJobData}
            onDataChange={setNewJobData}
            onClose={() => setShowNewJobModal(false)}
          />
        </div>
      )}

      {/* Job Detail Modal */}
      {selectedJob && (
        <div className={styles.modal}>
          <JobDetailModal jobId={selectedJob} onClose={() => setSelectedJob(null)} />
        </div>
      )}
    </div>
  )
}

function NavTab({
  icon: Icon,
  label,
  active,
  onClick,
}: {
  icon: React.ComponentType<{ size: number; className: string }>
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      className={`${styles.navTab} ${active ? styles.navTabActive : ''}`}
      onClick={onClick}
    >
      <Icon size={22} className={styles.navIcon} />
      <span className={styles.navLabel}>{label}</span>
    </button>
  )
}

function HomeScreen({ onNewJob }: { onNewJob: () => void }) {
  return (
    <div className={styles.screen}>
      <div className={styles.header}>
        <div className={styles.greeting}>
          <h1>Good morning, Ravi</h1>
          <p>Cool Air AC Services</p>
        </div>
        <button className={styles.notificationIcon}>
          <Bell size={20} />
        </button>
      </div>

      <div className={styles.statsGrid}>
        <Card className={styles.statCard}>
          <Calendar size={20} className={styles.statIcon} />
          <div className={styles.statLabel}>Jobs today</div>
          <div className={styles.statValue}>12</div>
          <div className={styles.statSubtext}>3 done · 5 active · 4 sched.</div>
        </Card>

        <Card className={styles.statCard}>
          <div className={styles.statIcon}>₹</div>
          <div className={styles.statLabel}>Earned today</div>
          <div className={styles.statValue}>4,200</div>
          <div className={styles.statSubtext}>↑ 8% vs yesterday</div>
        </Card>

        <Card className={styles.statCard}>
          <Clock size={20} className={styles.statIcon} />
          <div className={styles.statLabel}>Pending invoices</div>
          <div className={styles.statValue}>₹18,400</div>
          <div className={styles.statSubtext}>6 unpaid</div>
        </Card>

        <Card className={styles.statCard}>
          <Users2 size={20} className={styles.statIcon} />
          <div className={styles.statLabel}>Active techs</div>
          <div className={styles.statValue}>4 of 6</div>
          <div className={styles.statSubtext}>2 offline today</div>
        </Card>
      </div>

      <div className={styles.actionButtons}>
        <Button variant="primary" fullWidth onClick={onNewJob}>
          <Plus size={18} />
          New Job
        </Button>
        <Button variant="secondary" fullWidth>
          <Briefcase size={18} />
          All Jobs
        </Button>
        <Button variant="secondary" fullWidth>
          <CreditCard size={18} />
          Invoices
        </Button>
      </div>

      <div className={styles.sectionHeader}>
        <h2>Today's jobs</h2>
        <a className={styles.seeAll}>See all →</a>
      </div>

      <div className={styles.jobsList}>
        <JobCard
          customer="Priya Sharma"
          service="AC gas refill + cleaning"
          technician="Suresh Kumar"
          time="2:00 – 4:00 PM"
          status="In Progress"
          statusColor="blue"
        />
        <JobCard
          customer="Ramesh Kumar"
          service="AC not cooling"
          technician="Suresh Kumar"
          time="11:00 AM – 12:30 PM"
          status="Scheduled"
          statusColor="orange"
        />
      </div>
    </div>
  )
}

function JobsScreen({
  onSelectJob,
  selectedJob,
}: {
  onSelectJob: (jobId: string) => void
  selectedJob: string | null
}) {
  const [filter, setFilter] = useState('All')

  return (
    <div className={styles.screen}>
      <div className={styles.jobsHeader}>
        <h1>Jobs</h1>
        <Button variant="primary">
          <Plus size={18} />
          New Job
        </Button>
      </div>

      <div className={styles.filterTabs}>
        {['All', 'Scheduled', 'In Progress', 'Done'].map((f) => (
          <button
            key={f}
            className={`${styles.filterTab} ${filter === f ? styles.filterTabActive : ''}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className={styles.jobsList}>
        <div onClick={() => onSelectJob('JB-0001')}>
          <JobCard
            customer="Priya Sharma"
            service="AC gas refill + cleaning"
            technician="Suresh Kumar"
            time="2:00 – 4:00 PM"
            status="In Progress"
            statusColor="blue"
          />
        </div>
        <div onClick={() => onSelectJob('JB-0041')}>
          <JobCard
            customer="Ramesh Kumar"
            service="AC not cooling"
            technician="Suresh Kumar"
            time="11:00 AM – 12:30 PM"
            status="Scheduled"
            statusColor="orange"
            amount="₹1,800"
          />
        </div>
        <div onClick={() => onSelectJob('JB-0042')}>
          <JobCard
            customer="Anil Desai"
            service="Water purifier service"
            technician="Vijay Singh"
            time="10:30 AM"
            status="Scheduled"
            statusColor="orange"
            amount="₹900"
          />
        </div>
        <div onClick={() => onSelectJob('JB-0043')}>
          <JobCard
            customer="Deepak Joshi"
            service="AC gas top-up"
            technician="Suresh Kumar"
            time="5:00 PM"
            status="Scheduled"
            statusColor="orange"
            amount="₹1,200"
          />
        </div>
      </div>
    </div>
  )
}

function CustomersScreen() {
  return (
    <div className={styles.screen}>
      <div className={styles.customersHeader}>
        <h1>Customers</h1>
        <Button variant="primary">
          <User size={18} />
          Add
        </Button>
      </div>

      <div className={styles.searchBox}>
        <input type="text" placeholder="Search customers..." />
      </div>

      <div className={styles.customersList}>
        <CustomerCard
          name="Priya Sharma"
          location="Andheri West, Mumbai"
          amount="₹6,400"
          jobs="4 jobs"
        />
        <CustomerCard
          name="Ramesh Kumar"
          location="Bandra West, Mumbai"
          amount="₹18,900"
          jobs="7 jobs"
        />
        <CustomerCard
          name="Fatima Sheikh"
          location="Bandra West, Mumbai"
          amount="₹9,200"
          jobs="3 jobs"
        />
        <CustomerCard
          name="Karan Mehta"
          location="Chembur, Mumbai"
          amount="₹42,500"
          jobs="5 jobs"
        />
        <CustomerCard
          name="Anil Desai"
          location="Powai, Thane"
          amount="₹3,400"
          jobs="2 jobs"
        />
        <CustomerCard
          name="Sneha Iyer"
          location="Vashi, Navi Mumbai"
          amount="₹1,400"
          jobs="1 jobs"
        />
      </div>
    </div>
  )
}

function MoreScreen() {
  return (
    <div className={styles.screen}>
      <div className={styles.moreHeader}>
        <h2>More</h2>
        <p>Cool Air AC Services</p>
      </div>

      <div className={styles.moreGrid}>
        <Card className={styles.moreCard}>
          <CreditCard size={22} className={styles.moreIcon} />
          <div className={styles.moreLabel}>Invoices</div>
          <div className={styles.moreSubtext}>₹18,400 pending</div>
        </Card>

        <Card className={styles.moreCard}>
          <Users2 size={22} className={styles.moreIcon} />
          <div className={styles.moreLabel}>Technicians</div>
          <div className={styles.moreSubtext}>4 active · 2 offline</div>
        </Card>

        <Card className={styles.moreCard}>
          <Bell size={22} className={styles.moreIcon} />
          <div className={styles.moreLabel}>Notifications</div>
          <div className={styles.moreSubtext}>6 new today</div>
        </Card>

        <Card className={styles.moreCard}>
          <Wrench size={22} className={styles.moreIcon} />
          <div className={styles.moreLabel}>Settings</div>
          <div className={styles.moreSubtext}>Business & plan</div>
        </Card>
      </div>

      <Card className={styles.profileCard}>
        <div className={styles.profileInfo}>
          <div className={styles.profileAvatar}>RK</div>
          <div>
            <div className={styles.profileName}>Ravi Kumar</div>
            <div className={styles.profileRole}>Owner</div>
          </div>
        </div>
      </Card>

      <button className={styles.logoutBtn}>
        <LogOut size={18} />
        Log out
      </button>
    </div>
  )
}

function JobCard({
  customer,
  service,
  technician,
  time,
  status,
  statusColor,
  amount,
}: {
  customer: string
  service: string
  technician?: string
  time: string
  status: string
  statusColor: string
  amount?: string
}) {
  const getStatusProp = (statusText: string) => {
    if (statusText === 'Done') return 'done'
    if (statusText === 'In Progress') return 'progress'
    if (statusText === 'Scheduled') return 'scheduled'
    if (statusText === 'Cancelled') return 'cancelled'
    return 'done'
  }

  const getStatusBadgeText = (statusText: string) => {
    if (statusText === 'Draft') return statusText
    return `● ${statusText}`
  }

  return (
    <Card className={styles.jobCard}>
      <div className={styles.jobCardHeader}>
        <div>
          <div className={styles.jobCustomer}>{customer}</div>
          <div className={styles.jobService}>
            <Briefcase size={16} />
            {service}
          </div>
        </div>
        <Badge status={getStatusProp(status)}>{getStatusBadgeText(status)}</Badge>
      </div>
      {technician && (
        <div className={styles.jobTech}>
          <span className={styles.techAvatar}>SK</span>
          <span>{technician}</span>
          {amount && <span className={styles.jobAmount}>{amount}</span>}
        </div>
      )}
      <div className={styles.jobTime}>
        <Clock size={14} />
        {time}
      </div>
    </Card>
  )
}

function CustomerCard({
  name,
  location,
  amount,
  jobs,
}: {
  name: string
  location: string
  amount: string
  jobs: string
}) {
  return (
    <Card className={styles.customerCard}>
      <div className={styles.customerCardHeader}>
        <div className={styles.customerAvatar}>{name.charAt(0)}</div>
        <div className={styles.customerInfo}>
          <div className={styles.customerName}>{name}</div>
          <div className={styles.customerLocation}>{location}</div>
        </div>
      </div>
      <div className={styles.customerStats}>
        <div className={styles.customerAmount}>{amount}</div>
        <div className={styles.customerJobs}>{jobs}</div>
      </div>
    </Card>
  )
}

function NewJobModal({
  step,
  onStepChange,
  data,
  onDataChange,
  onClose,
}: {
  step: number
  onStepChange: (step: number) => void
  data: any
  onDataChange: (data: any) => void
  onClose: () => void
}) {
  const serviceIcons: Record<string, React.ComponentType<{ size: number }>> = {
    'AC Service': AirVent,
    Installation: Wrench,
    'Pest Control': Bug,
    Plumbing: Wrench,
    Electrical: Zap,
    Other: Package,
  }

  return (
    <div className={styles.modalContent}>
      <div className={styles.modalHeader}>
        <h2>New job</h2>
        <button onClick={onClose} className={styles.closeBtn}>
          <X size={20} />
        </button>
      </div>

      <div className={styles.modalBody}>
        {step === 1 && (
          <>
            <h3>Service type</h3>
            <div className={styles.serviceGrid}>
              {[
                { name: 'AC Service' },
                { name: 'Installation' },
                { name: 'Pest Control' },
                { name: 'Plumbing' },
                { name: 'Electrical' },
                { name: 'Other' },
              ].map((service) => {
                const IconComponent = serviceIcons[service.name] || Package
                return (
                  <button
                    key={service.name}
                    className={`${styles.serviceBtn} ${
                      data.serviceType === service.name ? styles.serviceBtnActive : ''
                    }`}
                    onClick={() => onDataChange({ ...data, serviceType: service.name })}
                  >
                    <IconComponent size={24} className={styles.serviceIcon} />
                    <span>{service.name}</span>
                  </button>
                )
              })}
            </div>

            <h3 style={{ marginTop: '24px' }}>Customer</h3>
            <select className={styles.select} onClick={() => onStepChange(2)}>
              <option>Choose customer...</option>
            </select>
            <button className={styles.addNewLink}>
              <User size={16} />
              Customer not in list? Add new
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <h3>Customer details</h3>
            <div className={styles.formField}>
              <label>Customer name *</label>
              <input type="text" placeholder="e.g. Ramesh Kumar" />
            </div>
            <div className={styles.formField}>
              <label>Phone number *</label>
              <input type="text" placeholder="+91 98765 43210" />
            </div>
            <div className={styles.formFieldRow}>
              <div>
                <label>City</label>
                <input type="text" placeholder="Mumbai" />
              </div>
              <div>
                <label>Area</label>
                <input type="text" placeholder="Andheri West" />
              </div>
            </div>
            <div className={styles.formField}>
              <label>Address / map location</label>
              <input type="text" placeholder="Flat, building, street, landmark" />
            </div>

            <Button variant="primary" fullWidth onClick={() => onStepChange(3)}>
              <User size={18} />
              Add customer
            </Button>
          </>
        )}

        {step === 3 && (
          <>
            <h3>Date and time</h3>
            <div className={styles.formFieldRow}>
              <div>
                <label>Date</label>
                <input type="text" value={data.date} readOnly />
              </div>
              <div>
                <label>Time</label>
                <input type="text" value={data.time} readOnly />
              </div>
            </div>

            <h3 style={{ marginTop: '24px' }}>Assign technician</h3>
            <input type="text" placeholder="Search technician..." className={styles.searchInput} />
            <div className={styles.techniciansList}>
              {['SK', 'MP', 'VS'].map((tech) => (
                <button
                  key={tech}
                  className={`${styles.techBtn} ${
                    data.technician === tech ? styles.techBtnActive : ''
                  }`}
                  onClick={() => onDataChange({ ...data, technician: tech })}
                >
                  <span className={styles.techAvatar}>{tech}</span>
                  <span>
                    {tech === 'SK'
                      ? 'Suresh Kumar'
                      : tech === 'MP'
                        ? 'Mahesh Patil'
                        : 'Vijay Singh'}
                  </span>
                </button>
              ))}
            </div>

            <div className={styles.formField}>
              <label>Notes for technician</label>
              <textarea placeholder="Any special instructions..." />
            </div>

            <Button variant="primary" fullWidth onClick={onClose}>
              <CheckCircle size={18} />
              Create job
            </Button>
          </>
        )}
      </div>
    </div>
  )
}

function JobDetailModal({ jobId, onClose }: { jobId: string; onClose: () => void }) {
  return (
    <div className={styles.modalContent}>
      <div className={styles.jobDetailHeader}>
        <button onClick={onClose} className={styles.backBtn}>
          <ArrowLeft size={20} />
          {jobId}
        </button>
        <Badge status="scheduled">● Scheduled</Badge>
      </div>

      <div className={styles.modalBody}>
        <div className={`${styles.detailSection} ${styles.customerCard}`}>
          <div className={styles.customerCardInfo}>
            <span className={styles.customerAvatarLarge}>RK</span>
            <div className={styles.customerCardDetails}>
              <div className={styles.customerName}>Ramesh Kumar</div>
              <div className={styles.customerPhone}>98201 55667</div>
            </div>
          </div>
          <div className={styles.locationInfo}>
            <MapPin size={16} />
            Sea View Road, Bandra West
          </div>
          <div className={styles.actionButtons}>
            <Button variant="secondary" fullWidth>
              <Phone size={16} />
              Call
            </Button>
            <Button variant="secondary" fullWidth>
              <MessageCircle size={16} />
              WhatsApp
            </Button>
          </div>
        </div>

        <div className={styles.detailSection}>
          <div className={styles.sectionLabel}>Service</div>
          <div className={styles.serviceName}>
            <AirVent size={16} />
            AC not cooling
          </div>
          <div className={styles.serviceTime}>
            <Clock size={14} />
            11:00 AM – 12:30 PM
          </div>
        </div>

        <div className={styles.detailSection}>
          <div className={styles.assignedToHeader}>
            <div className={styles.sectionLabel}>Assigned to</div>
            <button className={styles.reassignLink}>Reassign →</button>
          </div>
          <div className={styles.assignedTech}>
            <span className={styles.techAvatarLarge}>SK</span>
            <div>
              <div className={styles.assignedName}>Suresh Kumar</div>
              <span className={styles.onJobBadge}>● On job</span>
            </div>
          </div>
        </div>

        <div className={styles.jobAmountSection}>
          <div className={styles.sectionLabel}>Job amount</div>
          <div className={styles.jobAmountValue}>₹1,800</div>
        </div>

        <Button variant="secondary" fullWidth>
          <CreditCard size={16} />
          Generate invoice
        </Button>
      </div>
    </div>
  )
}
