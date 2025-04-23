import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelectore } from "../../store/Store";
import { setData } from "../../store/slice/DataSlice";
import { fetchPopular } from "../api/movie/Movie";
import { fetchTopRated } from "../api/tv/Tv";
import scss from "./HomePage.module.scss";
import { useNavigate } from "react-router-dom";

const HomePage: FC = () => {
  const { data } = useAppSelectore((s) => s.data);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [popularType, setPopularType] = useState<"movie" | "tv">("movie");
  const [topRatedType, setTopRatedType] = useState<"movie" | "tv">("tv");

  useEffect(() => {
    const loadData = async () => {
      const popular = await fetchPopular(popularType);
      const topRated = await fetchTopRated(topRatedType);
      dispatch(setData({ popular, topRated }));
    };
    loadData();
  }, [popularType, topRatedType, dispatch]);
  console.log(data);

  return (
    <section className={scss.HomePage}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.section}>
            <div className={scss.text}>
              <h1>🔥 Popular ({popularType})</h1>
              <select
                value={popularType}
                onChange={(e) =>
                  setPopularType(e.target.value as "movie" | "tv")
                }
              >
                <option value="movie">Movie</option>
                <option value="tv">TV</option>
              </select>
            </div>

            <div className={scss.block}>
              {data.popular?.map((item) => (
                <div
                  className={scss.card}
                  onClick={() =>
                    navigate(
                      `/Detail/${popularType || topRatedType}/${item.id}`
                    )
                  }
                  key={item.id}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt={item.name || item.title}
                    className={scss.cardImage}
                  />
                  <div className={scss.cardInfo}>
                    <h2>{item.name || item.title}</h2>
                    <span>{item.release_date || item.first_air_date}</span>
                    <span>⭐ {item.vote_average}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={scss.section}>
            <div className={scss.text}>
              <h1>🏆 Top Rated ({topRatedType})</h1>
              <select
                value={topRatedType}
                onChange={(e) =>
                  setTopRatedType(e.target.value as "movie" | "tv")
                }
              >
                <option value="movie">Movie</option>
                <option value="tv">TV</option>
              </select>
            </div>

            <div className={scss.block}>
              {data.topRated?.map((item) => (
                <div
                  onClick={() =>
                    navigate(
                      `/Detail/${popularType || topRatedType}/${item.id}`
                    )
                  }
                  className={scss.card}
                  key={item.id}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt={item.name || item.title}
                    className={scss.cardImage}
                  />
                  <div className={scss.cardInfo}>
                    <h2>{item.name || item.title}</h2>
                    <span>{item.release_date || item.first_air_date}</span>
                    <span>⭐ {item.vote_average}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
