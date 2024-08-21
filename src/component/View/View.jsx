import React from 'react'
import { FaEnvelope, FaGraduationCap, FaHashtag, FaHome, FaPhoneAlt } from 'react-icons/fa'
import { ImLocation } from 'react-icons/im'
import { PiGenderFemaleBold, PiGenderMaleBold } from 'react-icons/pi'
import { useLocation } from 'react-router'

function View() {

    const location = useLocation();


    return (
        <>
            <section className="main-content">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-4 offset-lg-4">
                            <div className="profile-card card rounded-lg shadow p-4 p-xl-5 mb-4 text-center position-relative overflow-hidden">
                                <h3 className="mb-4">{location.state.fname + " " + location.state.lname}</h3>
                                <div className="text-start mb-4 svg_fs">
                                    <p className="mb-2"><FaHashtag className='me-2' />{location.state.id}</p>
                                    <p className="mb-2"><FaEnvelope className='me-2' />{location.state.email}</p>
                                    <p className="mb-2"><FaPhoneAlt className='me-2' />{location.state.phone}</p>
                                    <p className="mb-2"><FaHome className='me-2' />{location.state.address}</p>
                                    <p className="mb-2"><ImLocation className='me-2' />{location.state.city}</p>
                                    <p className="mb-2"><FaGraduationCap className='me-2' />{location.state.course}</p>
                                    <p className="mb-2">
                                        {
                                            location.state.gender == "Male" ?
                                                <>
                                                    <PiGenderMaleBold className='me-2' />
                                                    {location.state.gender}
                                                </>
                                                :
                                                <>
                                                    <PiGenderFemaleBold className='me-2' />
                                                    {location.state.gender}
                                                </>
                                        }
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section >
        </>
    )
}

export default View