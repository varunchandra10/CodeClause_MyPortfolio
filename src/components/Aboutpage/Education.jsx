import React from 'react'
import './education.css'
const Education = () => {
    return (
        <>
            <div className='Education'>
                <h1 className='education-heading'>Education</h1>
                <div className='education-card'>
                    <div className='education-1'>
                        <div className='education1-content'>
                            <h2>B-tech</h2>
                            <div className='line'></div>
                            <p className='year'> DEC 2020 - current</p>
                            <p className='clg'>Indian Institute of Information Technology, Tiruchirappalli(IIITT).</p>
                            <p className='branch'>Computer Science and Engineering. <br/> <i className='gpa'>CGPA: 8.36</i></p>
                        </div>
                    </div>
                    <div className='education-2'>
                        <div className='education2-content'>
                            <h2>12th standard</h2>
                            <div className='line'></div>
                            <p className='year'> JUN 2018 - APR 2020</p>
                            <p className='clg'>Sri Chaitanya Junior College, Hyderabad.</p>
                            <p className='branch'>Maths,Physics,Chemistry. &nbsp; <i className='gpa'>Marks: 873/1000</i></p>
                        </div>
                    </div>
                    <div className='education-3'>
                        <div className='education3-content'>
                            <h2>10th standard</h2>
                            <div className='line'></div>
                            <p className='year'> JUN 2014 - MAR 2018</p>
                            <p className='clg'>Naveena Model High School, Hyderabad. <br/><i className='gpa'>GPA: 8.7</i></p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Education