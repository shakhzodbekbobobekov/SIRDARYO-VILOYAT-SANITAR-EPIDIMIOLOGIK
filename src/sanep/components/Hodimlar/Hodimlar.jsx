import React, { Component } from "react";
import "./Style/Hodimlar.scss";
import bir from "./HodimImg/bir.jpg";
import ikki from "./HodimImg/ikki.jpg";
import uch from "./HodimImg/uch.jpg";
import tort from "./HodimImg/tort.jpg";
import besh from "./HodimImg/besh.jpg";
import olti from "./HodimImg/olti.jpg";
import yetti from "./HodimImg/yetti.jpg";
import sakkiz from "./HodimImg/sakkiz.jpg";

const hodimlar = [
  {
    imgUrl: bir,
    name: "Байманов Адҳамжон Ахматқулович",
    rank: "Эпидемиология бўлими мудири",
  },
  {
    imgUrl: ikki,
    name: "Ачилов Ғанишер Пардабайевич",
    rank: "Иммунопрофилактика бўлим мудири",
  },
  {
    imgUrl: uch,
    name: "Мавлон Уралов",
    rank: "Маъмурий амалиёт бўлим мудири",
  },
  {
    imgUrl: tort,
    name: "Мухаммедова Феруза",
    rank: "Санитария-гигиена бўлим мудири",
  },
  {
    imgUrl: besh,
    name: "Шодмонов Боходир",
    rank: "Ўта хавфли юқумли касалликлар бўлим мудири",
  },
  {
    imgUrl: olti,
    name: "Ахмедова Дилфуза",
    rank: "Вирусалогия  лабороторияси бўлим мудири ",
  },
  {
    imgUrl: yetti,
    name: "Мамадали Ахмедeв",
    rank: "ДПМларни назорат қилиш бўлим мудири",
  },
  {
    imgUrl: sakkiz,
    name: "Уралова Сарвиноз Рустам қизи",
    rank: "ОАВ ва жамоатчилик билан ишлаш бўлими журнатисти",
  },
];

class Hodimlar extends Component {
  render() {
    return (
      <div className="hodim-page">
        <div className="hodim-all-card">
          <h1 className="hodim-title">Hodimlar</h1>
          <div className="hodim-card">
            {hodimlar.map((item, index) => (
              <div className="hodim-users" key={index}>
                <div className="img">
                  <img src={item.imgUrl} alt={item.name} />
                </div>
                <div className="hodim-about">
                  <h1 className="hodim-name">{item.name}</h1>
                  <h3 className="hodim-lavozim">{item.rank}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Hodimlar;
