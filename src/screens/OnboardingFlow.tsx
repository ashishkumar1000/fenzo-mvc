/**
 * Jobzo Onboarding Flow
 * Multi-step account setup (Phone → OTP → Business Info)
 */

import { useState, type ChangeEvent } from 'react'
import { Button, Input } from '@/components'
import styles from './OnboardingFlow.module.css'

export function OnboardingFlow({
  onComplete,
  onTechnicianFlow,
  onMessagingFlow,
}: {
  onComplete?: () => void
  onTechnicianFlow?: () => void
  onMessagingFlow?: () => void
}) {
  const [step, setStep] = useState(1)
  const [phone, setPhone] = useState('+91 ')
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [businessInfo, setBusinessInfo] = useState({
    businessName: '',
    name: '',
    businessType: 'AC / HVAC Service',
    city: '',
    gstNumber: '',
  })
  const [loading, setLoading] = useState(false)

  const handlePhoneSubmit = () => {
    if (phone.length < 5) return
    setStep(2)
  }

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return
    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`)
      nextInput?.focus()
    }
  }

  const handleOtpSubmit = () => {
    if (otp.some(digit => !digit)) return
    setStep(3)
  }

  const handleBusinessSubmit = async () => {
    setLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setLoading(false)
    onComplete?.()
  }

  const handleChangeNumber = () => {
    setStep(1)
    setOtp(['', '', '', '', '', ''])
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logo}>✓</div>
        <h1>Jobzo</h1>
        <p className={styles.tagline}>Manage jobs. Get paid. Simple.</p>
      </div>

      <StepIndicator currentStep={step} totalSteps={3} />

      <div className={styles.card}>
        {step === 1 && (
          <Step1Phone
            phone={phone}
            onPhoneChange={setPhone}
            onSubmit={handlePhoneSubmit}
            onTechnicianFlow={onTechnicianFlow}
            onMessagingFlow={onMessagingFlow}
          />
        )}
        {step === 2 && (
          <Step2OTP
            otp={otp}
            phone={phone}
            onOtpChange={handleOtpChange}
            onSubmit={handleOtpSubmit}
            onChangeNumber={handleChangeNumber}
          />
        )}
        {step === 3 && (
          <Step3Business
            info={businessInfo}
            onInfoChange={setBusinessInfo}
            onSubmit={handleBusinessSubmit}
            loading={loading}
          />
        )}
      </div>
    </div>
  )
}

interface Step1Props {
  phone: string
  onPhoneChange: (phone: string) => void
  onSubmit: () => void
  onTechnicianFlow?: () => void
  onMessagingFlow?: () => void
}

function Step1Phone({
  phone,
  onPhoneChange,
  onSubmit,
  onTechnicianFlow,
  onMessagingFlow,
}: Step1Props) {
  return (
    <>
      <div className={styles.stepHeader}>
        <p className={styles.stepLabel}>STEP 1 OF 3</p>
        <h2>Set up your Jobzo account</h2>
        <p className={styles.description}>We'll send a 6-digit code to this number.</p>
      </div>

      <div className={styles.formGroup}>
        <label>Your mobile number</label>
        <Input
          type="tel"
          value={phone}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onPhoneChange(e.target.value)}
          placeholder="+91 98765 43210"
        />
      </div>

      <Button variant="primary" fullWidth onClick={onSubmit}>
        Send OTP
      </Button>

      <button
        className={styles.technicianLink}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          e.preventDefault()
          onTechnicianFlow?.()
        }}
      >
        Go to technician flow →
      </button>

      <button
        className={styles.technicianLink}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          e.preventDefault()
          onMessagingFlow?.()
        }}
      >
        Go to messaging flow →
      </button>
    </>
  )
}

interface Step2Props {
  otp: string[]
  phone: string
  onOtpChange: (index: number, value: string) => void
  onSubmit: () => void
  onChangeNumber: () => void
}

function Step2OTP({ otp, phone, onOtpChange, onSubmit, onChangeNumber }: Step2Props) {
  return (
    <>
      <div className={styles.stepHeader}>
        <p className={styles.stepLabel}>STEP 2 OF 3</p>
        <h2>Enter the code</h2>
        <p className={styles.description}>Sent to {phone}</p>
      </div>

      <div className={styles.otpContainer}>
        {otp.map((digit, index) => (
          <input
            key={index}
            id={`otp-${index}`}
            type="text"
            value={digit}
            onChange={(e) => onOtpChange(index, e.target.value)}
            maxLength={1}
            className={styles.otpInput}
            inputMode="numeric"
          />
        ))}
      </div>

      <div className={styles.otpFooter}>
        <span>Resend OTP in 0:45</span>
        <button onClick={onChangeNumber} className={styles.link}>
          Change number
        </button>
      </div>

      <Button variant="primary" fullWidth onClick={onSubmit}>
        Verify & continue
      </Button>
    </>
  )
}

interface Step3Props {
  info: {
    businessName: string
    name: string
    businessType: string
    city: string
    gstNumber: string
  }
  onInfoChange: (info: Step3Props['info']) => void
  onSubmit: () => void
  loading: boolean
}

function Step3Business({ info, onInfoChange, onSubmit, loading }: Step3Props) {
  const handleChange = (field: string, value: string) => {
    onInfoChange({ ...info, [field]: value })
  }

  return (
    <>
      <div className={styles.stepHeader}>
        <p className={styles.stepLabel}>STEP 3 OF 3</p>
        <h2>Tell us about your business</h2>
      </div>

      <div className={styles.formGroup}>
        <label>Business name</label>
        <Input
          value={info.businessName}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange('businessName', e.target.value)}
          placeholder="e.g. Cool Air AC Services"
        />
      </div>

      <div className={styles.formGroup}>
        <label>Your name</label>
        <Input
          value={info.name}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange('name', e.target.value)}
          placeholder="e.g. Ravi Kumar"
        />
      </div>

      <div className={styles.formGroup}>
        <label>Business type</label>
        <select
          value={info.businessType}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => handleChange('businessType', e.target.value)}
          className={styles.select}
        >
          <option>AC / HVAC Service</option>
          <option>Plumbing</option>
          <option>Electrical</option>
          <option>Painting</option>
          <option>Carpentry</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label>City</label>
        <Input
          value={info.city}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange('city', e.target.value)}
          placeholder="Mumbai"
        />
      </div>

      <div className={styles.formGroup}>
        <label>GST number</label>
        <Input
          value={info.gstNumber}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange('gstNumber', e.target.value)}
          placeholder="27ABCDE1234F1Z5"
        />
        <p className={styles.hint}>Optional — needed only for GST invoices</p>
      </div>

      <button className={styles.addLater}>Add later</button>

      <Button
        variant="primary"
        fullWidth
        onClick={onSubmit}
        style={{ opacity: loading ? 0.7 : 1 }}
      >
        {loading ? 'Creating account...' : 'Start using Jobzo →'}
      </Button>
    </>
  )
}

interface StepIndicatorProps {
  currentStep: number
  totalSteps: number
}

function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
  return (
    <div className={styles.stepIndicator}>
      {Array.from({ length: totalSteps }).map((_, index) => {
        const stepNum = index + 1
        const isActive = stepNum === currentStep
        const isCompleted = stepNum < currentStep

        return (
          <div key={stepNum} className={styles.stepLine}>
            <div
              className={`${styles.stepCircle} ${
                isActive || isCompleted ? styles.active : ''
              }`}
            >
              {isCompleted ? '✓' : stepNum}
            </div>
            {stepNum < totalSteps && (
              <div
                className={`${styles.stepConnector} ${
                  isCompleted ? styles.active : ''
                }`}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}
