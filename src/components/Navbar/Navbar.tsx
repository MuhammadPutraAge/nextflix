import { Container } from "@/styles/GlobalStyles";
import {
  Nav,
  NavBrandContainer,
  NavBrandTitle,
  NavLinkContainer,
  NavLinkLogin,
  NavLinkRegister,
  NavLogoContainer,
  NavMainContainer,
  NavRecommendedContainer,
  NavRecommendedItem,
  NavSearchButton,
  NavSearchButtonContainer,
  NavSearchContainer,
  NavSearchInput,
  NavbarContainer,
} from "./NavbarStyles";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux";
import { KeyboardEvent, useState } from "react";
import { resetMovie } from "@/redux/movie/movieSlice";

export default function Navbar() {
  const router = useRouter();

  const dispatch = useAppDispatch();

  const { list } = useAppSelector((state) => state.movie);

  const [searchInput, setSearchInput] = useState("");

  const handleSearch = async (search: string) => {
    if (search !== "") {
      await dispatch(resetMovie(search));
      setSearchInput("");
      router.push("/");
    }
  };

  const handleKeyPress = (
    e: KeyboardEvent<HTMLInputElement>,
    search: string
  ) => {
    if (e.key === "Enter") {
      handleSearch(search);
    }
  };

  return (
    <NavbarContainer>
      <Container>
        <Nav>
          <NavLogoContainer href="/">
            <NavBrandContainer>
              <NavBrandTitle data-testid="title">NextFlix</NavBrandTitle>
            </NavBrandContainer>
          </NavLogoContainer>

          <NavMainContainer>
            <NavSearchContainer data-testid="search">
              <NavSearchInput
                type="search"
                placeholder="Avengers, Spiderman, Batman"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyPress={(e) => handleKeyPress(e, searchInput)}
              />
              <NavSearchButtonContainer
                onClick={() => handleSearch(searchInput)}
              >
                <NavSearchButton
                  src="/icons/ic-search.svg"
                  alt="Search Movies"
                />
              </NavSearchButtonContainer>
            </NavSearchContainer>

            {searchInput !== "" && (
              <NavRecommendedContainer>
                {list
                  .filter((item) =>
                    item.Title.toLowerCase().includes(searchInput)
                  )
                  .map((r) => (
                    <NavRecommendedItem
                      key={r.imdbID}
                      onClick={() => {
                        setSearchInput("");
                        router.push(`/${r.imdbID}`);
                      }}
                    >
                      {r.Title}
                    </NavRecommendedItem>
                  ))}
              </NavRecommendedContainer>
            )}
          </NavMainContainer>

          <NavLinkContainer>
            <NavLinkRegister data-testid="register-btn" href="/daftar">
              Login
            </NavLinkRegister>
            <NavLinkLogin data-testid="login-btn" href="/masuk">
              Register
            </NavLinkLogin>
          </NavLinkContainer>
        </Nav>
      </Container>
    </NavbarContainer>
  );
}
