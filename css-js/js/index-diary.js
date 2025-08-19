const diary__list = `
    <div id="card__list" class="content__diary__list">
    </div>
`
const diary__filter = `
    <select id="feeling__filter" class="feeling__filter" onchange="viewFiltering(event)">
        <option selected disabled>전체</option>
        <option value="happy">행복해요</option>
        <option value="sad">슬퍼요</option>
        <option value="surprise">놀랐어요</option>
        <option value="angry">화나요</option>
        <option value="etc">기타</option>
    </select>
    <button class="add__diary__button" onclick="viewModal('write__form__modal')">
        <img src="./assets/icons/plus_outline_light_m.svg" />
        일기쓰기
    </button>

`