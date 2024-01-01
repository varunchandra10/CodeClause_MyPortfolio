import React from 'react'
import './education.css'
const Certificate = () => {
    return (
        <>
            <div className='Certificate'>
                <h1 className='certificate-heading'>My Certifications</h1>
                <div className='certificate-card'>
                    <div className='certificate-1'>
                        <div className='certificate1-content'>
                            <h2>Solo Learn</h2>
                            <div className='line'></div>
                            <p className='Time-line'>May'23 - Aug'23</p>
                            <p className='certificate-description'>Introduction to Java Script</p>
                            <div className='certificate-link'>
                                <a href='https://drive.google.com/file/d/1S8uTfOZVwxqRBawR1EEcT6zyUmBeB3os/view?usp=sharing' className='certificate-link'>Certificate Link</a>
                            </div>
                        </div>
                    </div>
                    <div className='certificate-2'>
                        <div className='certificate2-content'>
                            <h2>Coursera</h2>
                            <div className='line'></div>
                            <p className='Time-line'>1 week</p>
                            <p className='certificate-description'>Get Started with Figma</p>
                            <div className='certificate-link'>
                                <a href='https://drive.google.com/file/d/19lUond3QroskavjOLseJR_caS6d1XO2v/view' className='certificate-link'>Certificate Link</a>
                            </div>
                        </div>
                    </div>
                    <div className='certificate-3'>
                        <div className='certificate3-content'>
                            <h2>Lets Upgrade</h2>
                            <div className='line'></div>
                            <p className='Time-line'>3 days</p>
                            <p className='certificate-description'>Python bootcamp</p>
                            <div className='certificate-link'>
                                <a href='https://drive.google.com/file/d/1nAUfV20lEry_cR_SmgbPsLdTXn3rYaHt/view?usp=sharing'>Certificate Link</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Certificate;