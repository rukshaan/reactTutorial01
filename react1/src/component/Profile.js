export default function Profile(props){

    return(
        <>
            <table width="50%" border="1" cellpadding="0" cellspacing="0">
                <tr>
                    <td align="right">Name</td>
                    <td>{props.name}</td>
                </tr>
                <tr>
                    <td align="right">RegNo</td>
                    <td>{props.regno}</td>
                </tr>
                <tr>
                    <td align="right">Course</td>
                    <td>{props.course}</td>
                </tr>
                <tr>
                    <td align="right">Gender</td>
                    <td>{props.gender}</td>
                </tr>
                <tr>
                    <td align="right">Programming Skills</td>
                    <td>{props.mylang}</td>
                </tr>
            </table>
        </>
    )
}