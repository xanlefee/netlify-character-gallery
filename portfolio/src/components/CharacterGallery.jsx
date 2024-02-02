import characterData from '../data/characterData.json';
import Character from './Character';
// This component should show all Characters defined in src\data\characterData.json file
// Should render it as list of character component

function CharacterGallery() {
    // Body
    return (
        <div>
            { characterData.map(
                (character) => <Character
                    key={character.id}
                    { ...character } // this is equivalent as the lines below
                    // _id={character._id}
                    // height={character.height}
                    // race={character.race}
                    // gender={character.gender}
                    // birth={character.birth}
                    // spouse={character.spouse}
                    // death={character.death}
                    // realm={character.realm}
                    // hair={character.hair}
                    // name={character.name}
                    // wikiUrl={character.wikiUrl}
                    // imgUrl={character.imgUrl}
                />
            )}
        </div>
    );
}

export default CharacterGallery;
