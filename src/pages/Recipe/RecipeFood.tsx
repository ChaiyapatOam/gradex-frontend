import { useLocation } from 'react-router-dom';
import line from '../../assets/images/Line 2.svg';
import ricelogo from '../../assets/images/rice-logo.svg';
import diamondlogo from '../../assets/images/diamond-logo.svg';
import crownlogo from '../../assets/images/crown-logo.svg';
import video from '../../assets/images/video.svg';

interface IMenu {
  menu_title: string;
  menu_description: string;
  ingredient_list: {
    ingredientId: IIngredient;
    portion: number;
  }[];
  package: "Basic" | "Deluxe" | "Premium";
  menu_image: string;
}

interface IIngredient {
  name: string;
  pricePerUnit: number;
  unit: string;
}

const RecipeFood = () => {
  const location = useLocation();
  const selectedFood = location.state as IMenu | undefined;

  if (!selectedFood) {
    return <div className="ml-60 mt-20 text-red-500 font-bold">No food selected</div>;
  }

  const packageLogoMap: { [key: string]: string } = {
    Basic: ricelogo,
    Deluxe: diamondlogo,
    Premium: crownlogo,
  };

  return (
    <div className="ml-60 mt-20">
      <div className="flex">
        {/* Image and Ingredients Section */}
        <div className="mr-40">
          <div className="relative w-[360px] h-[360px]">
            <img
              src={selectedFood.menu_image}
              alt={selectedFood.menu_title}
              className="shadow-md rounded-full w-full h-full object-cover"
            />
          </div>
          <div className="ml-8 mt-8">
            <div className="text-topic font-bold text-[40px] mb-4">Ingredients</div>
            {selectedFood.ingredient_list && selectedFood.ingredient_list.length > 0 ? (
              selectedFood.ingredient_list.map((ingredient, index) => (
                <div key={index} className="text-topic text-[20px]">
                  {ingredient.ingredientId.name}
                </div>
              ))
            ) : (
              <div className="text-gray-500">No ingredients available</div>
            )}
          </div>
        </div>

        {/* Details and Instructions Section */}
        <div>
          <div className="text-topic font-bold text-[64px]">{selectedFood.menu_title}</div>
          <div className="flex items-center mt-4">
            <img
              src={packageLogoMap[selectedFood.package]}
              alt={`${selectedFood.package} Logo`}
              width="55"
              height="55"
              className="mr-4"
            />
            <div className="text-[25px] text-topic font-bold">{selectedFood.package}</div>
          </div>
          <div className="w-[800px] mt-10 font-bold text-topic text-[20px]">
            {selectedFood.menu_description || 'No description available.'}
          </div>
          <img src={line} width="594" className="mt-10" alt="Separator Line" />
          <div className="text-topic font-bold text-[40px] mt-6">How to cook</div>
          <img
            src={video}
            alt="Cooking Video"
            width="440"
            height="246"
            className="mt-6 rounded-md shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default RecipeFood;
