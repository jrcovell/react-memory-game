import Modal from "../components/Modal"
import HighScores from "../components/HighScores"
import Button from "../components/Button"
import Settings from "../components/Settings";
import About from "../components/About";




function Modals() {
    return <Modal>
        {/* Modal State Change */}
        {/* //* only want single modal open at a time so link .Open and .Window to be able to distinguish which one should be active */}
        <Modal.Open opens='high-score'> 
            <Button>High Scores</Button>
        </Modal.Open>
        {/* Modal Content */}
        <Modal.Window  name='high-score'>
            <HighScores />
        </Modal.Window>

           <Modal.Open opens='setting'> 
            <Button>Settings</Button>
        </Modal.Open>
        <Modal.Window name='setting'>
            <Settings/>
        </Modal.Window>

         <Modal.Open opens='about'> 
            <Button>About</Button>
        </Modal.Open>
        <Modal.Window name='about'>
            <About/>
        </Modal.Window>

      
    </Modal>
}

export default Modals;