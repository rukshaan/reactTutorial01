import {useState} from "react";
export default function UserName(){
        const[yourname,setname]=useState();

        function handleTextChange(e){
            setname(e.target.value);
        }
        function resetname(){
            setname('');
        }
        
    return(

        <table border="0">
        <tbody>
            <tr>
                <td align="right">Name</td>
                <td><input type="text" value={yourname} onChange={handleTextChange}/></td>
            </tr>
            <tr>
                <td align="center"><input type="submit" value="Reset" onClick={resetname}/></td>
            </tr>

            <tr>
                <td colspan="2">Your Name is :{yourname}</td>
            </tr>
            </tbody>
        </table>
       
    );
}