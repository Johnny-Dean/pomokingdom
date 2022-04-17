export interface Character {
    char_name?: string,
    stats: {
        level: number,
        current_xp: number,
        xp_to_next_level: number,
        max_hp: number,
        current_hp: number,
        gold: number
    },
    inventory: [],
    tasks: string[]
}