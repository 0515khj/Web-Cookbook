import { useState } from "react";
import { SearchFilterWrap } from "./searchFilterStyle";

const ITEMS = ["사과", "바나나", "포도", "딸기", "수박", "오렌지", "복숭아"];

const SearchFilter = () => {
  const [keyword, setKeyword] = useState("");

  const filtered = ITEMS.filter((item) => item.includes(keyword));

  return (
    <SearchFilterWrap className="searchFilter">
      <div className="searchFilterBox">
        <input
          className="searchFilterInput"
          value={keyword}
          placeholder="과일을 검색하세요"
          onChange={(e) => setKeyword(e.target.value)}
        />

        {filtered.length > 0 ? (
          <ul className="searchFilterItems">
            {filtered.map((item) => (
              <li key={item} className="searchFilterItem">
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className="searchFilterEmpty">검색 결과가 없어요</p>
        )}
      </div>
    </SearchFilterWrap>
  );
};

export default SearchFilter;