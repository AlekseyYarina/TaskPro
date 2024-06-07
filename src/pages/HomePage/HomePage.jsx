// import Title from "../shared/Title/Title";
import SideBar from '../../components/SideBar/SideBar';
import WorkPlace from '../../components/WorkPlace/WorkPlace';
import css from './HomePage.module.css';
import Layout from '../../shared/components/Layout/Layout';
import AppBar from '../../components/AppBar/AppBar';

export default function HomePage() {
	return (
		<div className={css.container}>
			<Layout>
				<SideBar />
			</Layout>
			<WorkPlace />
		</div>
	);
}
