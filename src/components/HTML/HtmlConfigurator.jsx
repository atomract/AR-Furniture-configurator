import { useCustomization } from "../contexts/Context";


const HtmlConfigurator = () => {
  const {
    material,
    setMaterial,
    // legs,
    // setLegs,
    tableColors,
    tableColor,
    setTableColor,
    legsColors,
    legsColor,
    setLegsColor,
  } = useCustomization();

  return (
    <div className="configurator">
      <div className="configurator__section">
        <div className="configurator__section__title">Table material</div>
        <div className="configurator__section__values">
          <div
            className={`item ${material === "wood" ? "item--active" : ""}`}
            onClick={() => setMaterial("wood")}
          >
            <div className="item__label">Wood</div>
          </div>
          <div
            className={`item ${material === "fabric" ? "item--active" : ""}`}
            onClick={() => setMaterial("fabric")}
          >
            <div className="item__label">Fabric</div>
          </div>
          <div
            className={`item ${material === "marble" ? "item--active" : ""}`}
            onClick={() => setMaterial("marble")}
          >
            <div className="item__label">Marble</div>
          </div>
          
        </div>
      </div>
      <div className="configurator__section">
        <div className="configurator__section__title">Table color</div>
        <div className="configurator__section__values">
          {tableColors.map((item, index) => (
            <div
              key={index}
              className={`item ${
                item.color === tableColor.color ? "item--active" : ""
              }`}
              onClick={() => setTableColor(item)}
            >
              <div
                className="item__dot"
                style={{ backgroundColor: item.color }}
              />
              <div className="item__label">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="configurator__section">
        <div className="configurator__section__title">Legs color</div>
        <div className="configurator__section__values">
          {legsColors.map((item, index) => (
            <div
              key={index}
              className={`item ${
                item.color === legsColor.color ? "item--active" : ""
              }`}
              onClick={() => setLegsColor(item)}
            >
              <div
                className="item__dot"
                style={{ backgroundColor: item.color }}
              />
              <div className="item__label">{item.name}</div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default HtmlConfigurator;
