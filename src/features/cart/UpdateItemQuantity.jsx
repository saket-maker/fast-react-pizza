import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { decreaseQuantity, increaseQuantity } from './cartSlice';

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-2">
      <Button type="round" onClick={() => dispatch(decreaseQuantity(pizzaId))}>
        -
      </Button>

      <span className="text-stone-400">{currentQuantity}</span>
      <Button type="round" onClick={() => dispatch(increaseQuantity(pizzaId))}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
