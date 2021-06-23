import {useHistory} from 'react-router-dom'

const MarketplaceCard = props => {

    const {item} = props
    const {push} = useHistory()

    const goTo = () => {
        push(`/marketplace/${item.id}`)
    }

    return (
        <div>
        <p onClick={goTo} item={item}> {item.name} </p>
        <br />
        </div>
    )
}

export default MarketplaceCard;