import s from './style.module.css';
import { TextCard } from 'components/TextCard/TextCard';

export function NoteBrowse(props) {
    return (
        <>
            <TextCard 
                title="azaz" 
                subtitle="01/01/2022"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                onClickTrash={() => alert("trash")}
                onClick={() => alert("click note")}
            />
        </>
    )
}