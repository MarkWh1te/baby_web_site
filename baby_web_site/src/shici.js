import React, {
    Component
} from 'react';


class Shici extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "shici_title": "开开心心每天一句诗",
            "shici_content": ""

        };

    }
    componentDidMount() {
        fetch('https://api.gushi.ci/all.json')
            .then(data =>
                data.json())
            .then((data) => {

                this.setState({
                    "shici_content": data.content,
                    "shici_author": data.author,
                    "shici_origin": data.origin,
                    "shici_category": data.category,
                    "shici_link":"https://www.baidu.com/s?ie=UTF-8&wd="+data.origin+data.author
                })
            });
    }
    render() {
        return ( <
            div className = "Shici" >
            <
            header className = "App-header" >
            <
            p > {
                this.state.shici_title
            } <
            /p> <
            h1 >诗句:  {
                this.state.shici_content
            } <
            /h1> <
            h2 >作者： {
                this.state.shici_author
            } <
            /h2> <
            h2 >诗名： {
                this.state.shici_origin
            } <
            /h2>
            <a href={this.state.shici_link} target="_blank">{
                this.state.shici_origin
            }</a>
            <
            h2 >分类： {
                this.state.shici_category
            } <
            /h2> <
            /header> < /
            div >
        );
    }
}

export default Shici;
