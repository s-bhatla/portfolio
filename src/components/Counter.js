import "./styles/Counter.css"

function Counter(){
    return (
        <div id="counter" className="d-flex justify-content-around">
            {/* Add counting effect and paralax */}
            <div className="d-flex flex-column justify-content-center counter-ele">
                <i class="far fa-lightbulb"></i>
                <div>69</div>
                <div className="d-flex justify-content-center">Completed Projects</div>
            </div>
            <div className="d-flex flex-column justify-content-center counter-ele">
                <i class="fas fa-laptop-code"></i>
                <div>69</div>
                <div>Hackathons Participated</div>
            </div>
            <div className="d-flex flex-column justify-content-center counter-ele">
                <i class="fas fa-award"></i>
                <div>69</div>
                <div>Awards</div>
            </div>
            <div className="d-flex flex-column justify-content-center counter-ele">
                <i class="fas fa-user-plus"></i>
                <div>69</div>
                <div>LinkedIn Connections</div>
            </div>
        </div>
    )
}

export default Counter;