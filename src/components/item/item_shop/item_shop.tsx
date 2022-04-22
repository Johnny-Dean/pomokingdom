import React, { useEffect, useState } from "react";
import { Button, Card, Stack } from "@mui/material";
import API from "../../../services/api-call";
import ItemCard from "../item_card";
import { useGetCharacter } from "../../../context/character_provider";


function ItemShop(){
    const [itemShopInventory, setItemShopInventory] = useState([]);
    const [userGold, setUserGold] = useState(useGetCharacter()?.stats.gold);
    useEffect(() => {
        API.getItemShop().then(res => setItemShopInventory(res));
    }, [])


    return (
        <Card>
            Your current gold: {userGold}
            <Stack
            direction="row"
            justifyContent="center"
            >
                {itemShopInventory.map((item: any) => {
                    console.log(item)
                return (
                    <Card>
                        <ItemCard iconId="sword" />
                        <p>{item.cost}</p>
                        <Button>buy</Button>
                    </Card>

                )
                })}
            </Stack>

        </Card>
    )
}
export default ItemShop;