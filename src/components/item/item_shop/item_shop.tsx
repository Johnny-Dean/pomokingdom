import React, { useEffect, useState } from "react";
import { Button, Card, Stack } from "@mui/material";
import API from "../../../services/api-call";
import ItemCard from "../item_card";
import { useCharacterUpdate, useGetCharacter } from "../../../context/character_provider";
import { Item } from "../item_interface";



interface ItemShopCardProps{
    item: Item,
    handleClick: () => void
}

function ItemShopCard({item, handleClick}: ItemShopCardProps){

    
    return (
        <Card>
            <ItemCard iconId="sword" />
            <p>{item.cost}</p>
            {(!item.isOwned) && <Button onClick={handleClick}>buy</Button>}
        </Card>
    )
}

function ItemShop(){
    const character = useGetCharacter() !;
    const [itemShopInventory, setItemShopInventory] = useState<Item[]>([]);
    const [userGold, setUserGold] = useState(useGetCharacter()?.stats.gold);
    const [userInventory, setUserInventory] = useState<Item[] | []>(useGetCharacter()?.inventory !);
    const updateCharacter = useCharacterUpdate();

    const handleBuyClick = (item: Item) => {
        console.log("ran")
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        updateCharacter({...character, inventory: userInventory.concat(item)})
    }

    const flagItemsOwned = ((itemShopItems: Item[]): Item[] => {
        return itemShopItems.map((itemShopItem: Item) => {
            if (userInventory?.some(inventoryItem => inventoryItem === itemShopItem)){
                itemShopItem.isOwned = true;
            }
            return itemShopItem;
        })
    })

    useEffect( () => {
        API.getItemShop().then(res => {
            const itemShopItems = flagItemsOwned(res);
            setItemShopInventory(itemShopItems);
            console.log(res);
        });
    }, [])


    return (
        <Card>
            Your current gold: {userGold}
            <Stack
            direction="row"
            justifyContent="center"
            >
                {itemShopInventory.map((item: Item) => <ItemShopCard key={item._id} item={item} handleClick={() => handleBuyClick(item)} />)}
            </Stack>
        </Card>
    )
}
export default ItemShop;