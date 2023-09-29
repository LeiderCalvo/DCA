import { Trip } from '../types/trips';

class Trips {
  get(): Trip[] {
    return [
      {
        caption: "esta imagen es descriptiva",
        url: "https://www.orbitmedia.com/wp-content/uploads/2018/09/careers-IMGs-kickballGang-670x526.jpg",
        btn_text: "hit for like",
        text: "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.",
      },
      {
        caption: "esta imagen es descriptiva",
        url: "https://www.orbitmedia.com/wp-content/uploads/2018/09/careers-IMGs-kickballGang-670x526.jpg",
        btn_text: "dislike",
        text: "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.",
      },
      {
        caption: "esta imagen es descriptiva",
        url: "https://www.orbitmedia.com/wp-content/uploads/2018/09/careers-IMGs-kickballGang-670x526.jpg",
        btn_text: "buy",
        text: "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.",
      },
      {
        caption: "esta imagen es descriptiva",
        url: "https://www.orbitmedia.com/wp-content/uploads/2018/09/careers-IMGs-kickballGang-670x526.jpg",
        btn_text: "sell",
        text: "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.",
      },
    ];
  }
}

export default new Trips();
