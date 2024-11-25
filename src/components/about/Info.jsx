import React from 'react'

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i class="uil uil-award about__icon"></i>

                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">4+ Years Coding</span>
            </div>

            <div className="about__box">
                <i class="uil uil-bag about__icon"></i>

                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">25+ Projects</span>
            </div>

            <div className="about__box">
                <i class="uil uil-envelope-question about__icon"></i>

                <h3 className="about__title">Available</h3>
                <span className="about__subtitle">24/7</span>
            </div>
        </div>
    )
}

export default Info