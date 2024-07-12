interface textNode {
  textNode:string
}

const Jo:React.FC<textNode> = ({textNode}) =>{ // 대문자 주의 하자
  return(
    <h1>{textNode}</h1>
  );
}

export default Jo;