import React, { Component } from 'react'
import axios from 'axios'
class Main extends Component
{
	constructor ()
	{
		super()
		this.state = {
			loading: false,
			datas: []
		}
	}

	componentDidMount ()
	{
		this.setState( { loading: true } )
		axios.get( 'https://jsonplaceholder.typicode.com/posts' )
			.then( response => response.data )
			.then( datas =>
			{

				this.setState( {
					datas,
					loading: false
				} );

			} )
	}


	render ()
	{
		return (
			this.state.datas.map( ( value ) => (
				<div className="accordion mb-2" id={ `accordion${ value.id }` } key={ value.id }>
					<div className="card">
						<div className="card-header" id={ `heading${ value.id }` }>
							<h2 className="mb-0">
								<button className="btn btn-link btn-block text-left" type="button" data-toggle={ `collapse${ value.id }` } data-target={ `#collapse${ value.id }` } aria-expanded="true" aria-controls={ `collapse${ value.id }` } />
								{ value.title }

							</h2>
						</div>

						<div id={ `collapse${ value.id }` } className="collapse" aria-labelledby={ `heading${ value.id }` } data-parent={ `#accordion${ value.id }` }>
							<div className="card-body">
								{ value.body }
							</div>
						</div>
					</div>
				</div>
			) )
		)
	}
}

export default Main