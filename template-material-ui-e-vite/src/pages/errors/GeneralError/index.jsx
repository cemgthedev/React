import { useNavigate } from "react-router-dom";

import { URLS } from "@/constants/urls";

import Button from "@mui/material/Button";

export default function GeneralError({
  className,
  minimal = false,
}) {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        {!minimal && (
          <h1>500</h1>
        )}
        <span>Oops! Algo deu errado {`:')`}</span>
        <p>
          Pedimos desculpas pelo inconveniente. <br /> Por favor, tente
          novamente mais tarde.
        </p>
        {!minimal && (
          <div>
            <Button variant="outlined" color="default" onClick={() => navigate(-1)}>
              Voltar
            </Button>
            <Button variant="outlined" color="default" onClick={() => navigate(URLS.dashboard)}>
              Voltar para Home
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}