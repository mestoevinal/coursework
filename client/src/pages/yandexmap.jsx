import React, {useRef} from "react";
import {YMaps, Map, Circle} from "react-yandex-maps";

const Yandexmap = () => {
    const addressInput = useRef()

    const loadSuggest = ymaps => {
        const suggestView = new ymaps.SuggestView("suggest");
    };

    return (
        <div>

            <input
                style={{width: "400px"}}
                id="suggest"
                ref={addressInput}
                placeholder="Выберите адрес начала экскурсии"
            />

            <YMaps>
                <Map
                    onLoad={ymaps => loadSuggest(ymaps)}
                    defaultState={{center: [55.751574, 37.573856], zoom: 9}}
                    modules={["SuggestView"]}
                >
                    <Circle
                        geometry={[[55.76, 37.6], 10000]}
                        options={{
                            draggable: true,
                            fillColor: '#DB709377',
                            strokeColor: '#990066',
                            strokeOpacity: 0.8,
                            strokeWidth: 5,
                        }}
                    />
                </Map>
            </YMaps>
        </div>
    )
}
export default Yandexmap