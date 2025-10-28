import Card from '../components/cards';
import styled from 'styled-components';
import colors from '../utils/styles/colors';
import { Loader } from '../utils/styles/Atoms';
import { useFetch } from '../utils/hooks';

const FreelancesContainer = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
`;

const CardsContainer = styled.div`
      display: grid;
      gap: 90px;
      grid-template-rows: 350px 350px;
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
      justify-items: center;
`;

const PageTitle = styled.h1`
      font-size: 30px;
      color: black;
      text-align: center;
      padding-bottom: 30px;
`;

const PageSubtitle = styled.h2`
      font-size: 20px;
      color: ${colors.secondary};
      font-weight: 300;
      text-align: center;
      padding-bottom: 30px;
`;

/* const freelanceProfiles = [
  {
    name: 'Jane Doe',
    jobTitle: 'Devops',
  },
  {
    name: 'John Doe',
    jobTitle: 'Developpeur frontend',
  },
  {
    name: 'Jeanne Biche',
    jobTitle: 'Développeuse Fullstack',
  },
]
*/

function Freelances() {
      const { isLoading, data, error } = useFetch(
            'http://localhost:8000/freelances',
      );

      const { freelancersList } = data;

      if (error) {
            return <span>Oups il y a eu un problème</span>;
      }

      return (
            <FreelancesContainer>
                  <PageTitle>Trouvez votre prestataire</PageTitle>
                  <PageSubtitle>
                        Chez Shiny nous réunissons les meilleurs profils pour
                        vous.
                  </PageSubtitle>
                  {isLoading ? (
                        <Loader />
                  ) : (
                        <CardsContainer>
                              {freelancersList &&
                                    freelancersList.map((profile, index) => (
                                          <Card
                                                key={`${profile.name}-${index}`}
                                                label={profile.job}
                                                title={profile.name}
                                                picture={profile.picture}
                                          />
                                    ))}
                        </CardsContainer>
                  )}
            </FreelancesContainer>
      );
}

export default Freelances;
