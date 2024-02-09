import './teamSelect.scss';

const TeamSelect = ({ sport, teams, onChange }) => {
	return (
		<select name={sport} id={sport} className='team-select' onChange={onChange}>
			<option value=''>Favorite Team...</option>
			{teams?.map((team) => (
				<option key={team.Key} value={team.Name + ', ' + team.Key}>
					{team.Name}
				</option>
			))}
		</select>
	);
};

export default TeamSelect;
