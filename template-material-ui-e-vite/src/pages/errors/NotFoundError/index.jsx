import { useNavigate } from "react-router-dom";

import { URLS } from "@/constants/urls";
import Button from '@mui/material/Button';

export default function NotFoundError() {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <h1>404</h1>
        <span>Oops! Página não encontrada!</span>
        <p>
          Parece que a página que você está procurando <br />
          não existe ou pode ter sido removida.
        </p>
        <div>
          <Button variant="outlined" color="default" onClick={() => navigate(-1)}>
            Voltar para a página anterior
          </Button>
          <Button variant="outlined" color="default" onClick={() => navigate(URLS.dashboard)}>
            Voltar para Home
          </Button>
        </div>
      </div>
    </div>
  );
}