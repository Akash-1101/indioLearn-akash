import "./index.css"

const WhyChooseUs =()=>(
    <div className="why-choose-us-main-bg-container">
        <h1>Why Choose Us?</h1>
        <div className="why-choose-card-bg-container">
            <div className="why-choose-card">
                <img className="img2" src="https://www.indigolearn.com/media/images/ca_concept.png"/>
                <p className="expert-para">Expert Faculty</p>
                <p>Our qualified Faculty with significant practical experience guide students every step of the way</p>
            </div>
            <div className="why-choose-card">
                <img className="img2" src="https://www.indigolearn.com/media/images/ca_top_faculties.png"/>
                <p className="expert-para">Complete Success Package</p>
                <p>Leading Exam Prep Destination with Video classes, Live sessions, Doubt resolution Forums, MCQs, Practice tests, Webinars.</p>
            </div>
            <div className="why-choose-card">
                <img className="img2" src="https://www.indigolearn.com/media/images/placement.png"/>
                <p className="expert-para">Placements</p>
                <p>Resume building workshops, mock interviews and placement drives will help you impress the top employers and get your Dream Job.</p>
            </div>
        </div>
        <div className="whychooseus-below-container">
            <div className="level-container">
                <img className="img3" src="https://indigolearn.s3.ap-south-1.amazonaws.com/website/pp_book_icon.png"/>
                <div className="level-para-container">
                    <p>Levels</p>
                    <p>Three (13 papers)</p>
                </div>
            </div>
            <div className="level-container">
                <img className="img3" src="https://indigolearn.s3.ap-south-1.amazonaws.com/website/pp_calendar_icon.png"/>
                <div className="level-para-container">
                    <p>Duration</p>
                    <p>6-30 months</p>
                </div>
            </div>
            <div className="level-container">
                <img className="img3" src="https://indigolearn.s3.ap-south-1.amazonaws.com/website/pp_exam_icon.png"/>
                <div className="level-para-container">
                    <p>Exams</p>
                    <p>Quarterly (Online)</p>
                </div>
            </div>
            <div className="level-container">
                <img className="img3" src="https://www.indigolearn.com/media/CFAPageImages/CFA_COURSE_FEATURE_1.svg"/>
                <div className="level-para-container">
                    <p>Exemptions</p>
                    <p>Upto 9 papers</p>
                </div>
            </div>
        </div>
    </div>
)

export default WhyChooseUs