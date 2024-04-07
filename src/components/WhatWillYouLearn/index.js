import "./index.css"


const WhatWillYouLearn=()=>(
    <div className="bg-main-container-wwl">
        <h1>What will you Learn in ACCA?</h1>
        <div className="learn-cars-container">
            <div className="learn-card">
                <p className="knowledge-para">Knowledge Level</p>
                <ul className="ullist">
                    <li>Business and Technology (BT)</li>
                    <li>Management Accounting (MA)</li>
                    <li>Financial Accounting (FA)</li>
                </ul>
                <p className="knowledge-para">3 papers</p>
            </div>
            <div className="learn-card">
                <p className="knowledge-para">Skill Level</p>
                <ul  className="ullist">
                    <li>Corporate and Business Law (LW)</li>
                    <li>Performance Management (PM)</li>
                    <li>Taxation (TX)</li>
                    <li>Financial Reporting (FR)</li>
                    <li>Audit and Assurance (AA)</li>
                    <li>Financial Management (FM)</li>
                </ul>
                <p className="knowledge-para">3 papers</p>
            </div>
            <div className="learn-card">
                <p className="knowledge-para">Professional Level</p>
                <p className="compulsory-para">Compulsory</p>
                <ul>
                    <li>SBL - Strategic Business Leader</li>
                    <li>SBR - Strategic Business Reporting</li>
                </ul>
                <p className="compulsory-para">Two out of the following</p>
                <ul>
                    <li>Advanced Financial Management (AFM)</li>
                    <li>Advanced Performance Management (APM)</li>
                    <li>Advanced Taxation (ATX) </li>
                    <li>Advanced Audit and Assurance (AAA)</li>
                </ul>
                <p className="knowledge-para">4 papers</p>
            </div>
        </div>
    </div>
)

export default WhatWillYouLearn