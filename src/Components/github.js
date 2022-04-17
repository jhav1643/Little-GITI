import React from "react";
import PropTypes from 'prop-types'
import Card from './Card'
class Github extends React.Component {
    static defaultProp = {
        pageSize: 5
    }

    static propTypes = {
        pageSize: PropTypes.number
    }

    constructor(props) {
        super(props);

        this.state = {
            items: [],
            page: 1,
            total_count: 0,
            searchField:''
        }
    }

    async GitHubRepo() {
        let url = `https://api.github.com/search/repositories?q=language:Javascript&sort=stars&order=desc&page=${this.state.page + 1}&per_page=${this.props.pageSize}`
        let data = await fetch(url)
        let parseData = await data.json();

        this.setState({
            items: parseData.items,
            total_count: parseData.total_count
        })
    }

    async componentDidMount() {
        this.GitHubRepo();
    }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        let url = `https://api.github.com/search/repositories?q=language:Javascript&sort=stars&order=desc&page=${this.state.page + 1}&per_page=${this.props.pageSize}`

        let data = await fetch(url);
        let parseData = await data.json();

        this.setState({
            items: parseData.items,
            total_count: parseData.total_count
        })
    };

    handlePreviousClick = async () => {
        let url = `https://api.github.com/search/repositories?q=language:Javascript&sort=stars&order=desc&page=${this.state.page - 1}&per_page=${this.props.pageSize}`

        let data = await fetch(url);
        let parseData = await data.json();

        this.setState({
            items: parseData.items,
            page: this.state.page - 1
        })
    }

    handleNextClick = async () => {
        let url = `https://api.github.com/search/repositories?q=language:Javascript&sort=stars&order=desc&page=${this.state.page + 1}&per_page=${this.props.pageSize}`

        let data = await fetch(url);
        let parseData = await data.json();

        this.setState({
            items: parseData.items,
            page: this.state.page + 1
        })

    }

    handleChange(e)
    {
        this.setState({searchField:e.target.value})
    }

    render() {
        return (
            <div>
                <h1 className='text-center' style={{ margin: '35px 0px' }}>Github Repositories</h1>
                <div className="row d-flex justify-content-around" style={{ margin: '5px 0px' }}>
                    {this.state.items.map((element) => {
                        return (<div className="col-md-4" key={element.url} >
                            <Card url = {element.html_url}
                                name={element.name ? element.name : ''}
                                descreption={element.description ? element.description : ""}
                                ownerLogin={element.owner.login}
                                stars_Count={element.stargazers_count}
                                forks_count={element.forks_count}
                                language={element.language}
                            />
                        </div>)
                    })}
                </div>
                <div className="container d-flex justify-content-between" style={{paddingBottom: "10px"}}>
                    <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
                    <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }

}

export default Github;