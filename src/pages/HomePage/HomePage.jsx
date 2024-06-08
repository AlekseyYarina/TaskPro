import SideBar from '../../components/SideBar/SideBar';
import WorkPlace from '../../components/WorkPlace/WorkPlace';
import css from './HomePage.module.css';
import Layout from '../../shared/components/Layout/Layout';
import Header from '../../components/Header/Header';

export default function HomePage() {
	return (
		<div className={css.container}>
			<Layout>
				<Header/>
				<SideBar />
			</Layout>
			<WorkPlace />
		</div>
	);
}
