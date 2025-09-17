import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { removeItem } from './cartSlice';

function DeleteItem({ id }) {
  const dispatch = useDispatch();
  return (
    <Button type="small" onClick={() => dispatch(removeItem(id))}>
      Remove
    </Button>
  );
}

export default DeleteItem;
