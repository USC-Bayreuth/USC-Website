import {Component} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './ErrorPage.css'

class ErrorPage extends Component{
    state={mobileMode: window.innerWidth<960}

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    updateDimensions=()=>{
        let newState=Object.assign(this.state)
        if(window.innerWidth>=960)
            newState.mobileMode=false
        else
            newState.mobileMode=true
        this.setState(newState)
    }
    render(){
        if(!this.state.mobileMode){
            return(
                <Container style={{paddingTop:20}}>
                    <Row>
                        <Col className='col-6'>
                            <h2 className='error-code'>404</h2>
                        </Col>
                        <Col className='col-6' style={{justifyContent: 'start'}}>
                            <h2 className='error-message'>Wir haben am ganzen Campus gesucht - gefunden haben wir jedoch nichts!</h2>
                        </Col>
                    </Row>
                </Container>
            )
        }
        else{
            return(
                <>
                    <h2 className='error-code'>404</h2>
                    <h2 className='error-message'>Wir haben am ganzen Campus gesucht - gefunden haben wir jedoch nichts!</h2>
                </>
            )
        }
    }
}

export default ErrorPage