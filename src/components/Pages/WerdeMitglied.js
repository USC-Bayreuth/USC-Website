import {Component} from 'react'
import {Table, Container} from 'react-bootstrap'

class WerdeMitglied extends Component{
    render(){
        return(
            <>
                <h1>Werde Mitglied</h1>
                <h2>Beitragssätze</h2>
                <p>Der Beitragssatz für eure Mitgliedschaft beim USC Bayreuth setzt sich aus einem Grundbeitrag und einem oder mehreren Abteilungsbeiträgen zusammen. Diese sind jeweils abhängig von eurem Status (Studierender, Beschäftigter oder Alumni/Externer). Falls ihr Mitglied bei mehreren Abteilungen werden möchtet, muss der höhere Abteilungsbeitrag voll gezahlt werden und der/die niedrigere(n) nur zur Hälfte. (Beispiel für eine Mitgliedschaft eines Studenten in den Abteilungen Tennis und Fußball: 20€ Grundbeitrag + 110€ Abteilungsbeitrag Tennis (voll) + 22,50€ Abteilungsbeitrag Fußball (hälftig) = 152,50€)</p>
                <p>Auch nach dem Beitritt zum Verein ist ein zusätzlicher Beitritt zu einer neuen Abteilung oder ein Austritt aus einer Abteilung (falls mehrere gewählt wurden) jederzeit möglich. In diesem Fall müsste nur der Mitgliedsantrag angepasst werden. Wende dich in diesem Fall bitte zu einem der <a className='link' href='/Verantwortliche'>Abteilungsleiter</a> der entsprechenden Abteilung.</p>
                <p>Falls ein Mitglied erst nach dem 1.7. eines Jahres beitritt, muss für das restliche Jahr nur die Hälfte des Abteilungsbeitrags gezahlt werden (jedoch der volle Grundbeitrag).</p>
                <Container className='my-container' fluid>
                    <div style={{overflowX: 'auto'}}>
                        <Table style={{width: '100%', marginTop: 20, color: 'whitesmoke'}}>
                            <thead>
                                <tr style={headerStyle}>
                                    <th/>
                                    <th/>
                                    <th style={itemStyle}>Fußball</th>
                                    <th>Tennis</th>
                                    <th>Roundnet</th>
                                    {/*<th>Volleyball</th>*/}
                                </tr>
                                <tr style={subheaderStyle}>
                                    <td style={basicStyle}/>
                                    <td>Grundbeitrag</td>
                                    <td style={itemStyle}>Abteilungsbeitrag<br/>45€</td>
                                    <td>Abteilungsbeitrag<br/>110€</td>
                                    <td>Abteilungsbeitrag<br/>24€</td>
                                    {/*<td>Abteilungsbeitrag<br/>24€</td>*/}
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={lightRow}>
                                    <td style={itemStyle}>Studierende</td>
                                    <td>20€</td>
                                    <td>65€</td>
                                    <td>130€</td>
                                    <td>44€</td>
                                    {/*<td>44€</td>*/}
                                </tr>
                                <tr>
                                    <td style={itemStyle}>Beschäftigte</td>
                                    <td>40€</td>
                                    <td>85€</td>
                                    <td>150€</td>
                                    <td>64€</td>
                                    {/*<td>64€</td>*/}
                                </tr>
                                <tr style={lightRow}>
                                    <td style={itemStyle}>Alumni/Externe</td>
                                    <td>60€</td>
                                    <td>105€</td>
                                    <td>170€</td>
                                    <td>84€</td>
                                    {/*<td>84€</td>*/}
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Container>
                <h2>Mitgliedsantrag</h2>
                <p>Wurde dein Interesse geweckt? <a target="_blank" rel="noreferrer" href='/download/aufnahmeantrag_usc_bayreuth.pdf' className='link'>Hier</a> findest du unseren Mitgliedsantrag. Wende dich bitte damit zum <a className='link' href='/Verantwortliche'>Verantwortlichen</a> der entsprechenden Abteilung.</p>
            </>
        )
    }
}

export default WerdeMitglied

const headerStyle={background: '#017241'}
const subheaderStyle={background: '#0acf79'}
const basicStyle={background: '#221f1f'}
const lightRow={background: '#302f2e'}
const itemStyle={paddingTop: 10, paddingBottom: 10}