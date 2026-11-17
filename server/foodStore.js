// One shared in-memory mock database instance.
class FoodStore {
    constructor() {
        this.foods = [
            { id: 1, name: "Pizza", price: 12.99 },
            { id: 2, name: "Burger", price: 8.99 },
            { id: 3, name: "Pasta", price: 10.49 },
            { id: 4, name: "Salad", price: 6.99 },
            { id: 5, name: "Sandwich", price: 7.49 }
        ];
    }
    // Return copies to protect stored items from caller changes.
    getAll() {
        return this.foods.map(food => ({ ...food }));
    }
}
// CommonJS caches the instance for all imports.
module.exports = new FoodStore();
