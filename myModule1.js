const foodList = ['watermelon', 'chicken', 'tofu']

module.exports.food = () => {
   for (let i = 0; i < foodList.length; i++) {
      console.log(foodList[i]);
   }
}
