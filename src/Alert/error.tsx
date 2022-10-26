import React, { FunctionComponent } from 'react';

interface TextComponentProps {
    label:string;
    color:string;
}
 
const TextComponent: FunctionComponent<TextComponentProps> = ({color,label}) => {
    return ( 
        <div>{label} Color : ${color}</div>
     );
}
 
export default TextComponent;


