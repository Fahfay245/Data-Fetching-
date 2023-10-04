import ListItem from "./ListItem"

const List = ({item}) => {
  return (
    <ul>
        {item.map(item => (
            <ListItem 
                key = {item.id}
                item = {item}
            />
        ))}
    </ul>
  )
}

export default List