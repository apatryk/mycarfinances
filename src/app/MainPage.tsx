import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';


export const MainPage = () => {
  const navigate = useNavigate();
  const onRedirectClick = () => navigate("/car_profile")
  return (
    <>
      <Button onClick={onRedirectClick}>
        Dodaj auto
      </Button>
    </>
  );
};
