import React, { Component } from 'react';
import Form from './Form';
import List from './List';
import './Music.css'
import Modal from './Modal';

class Music extends Component {
    state = {
        music :  [{rank:1,title:'Blueming',singer:'아이유 (IU)',poster:'//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/297/613/81297613_1574066356132_1_140x140.JPG',state:'유지',id:0,key:'D1PvIWdJ8xo'},{rank:2,title:'늦은 밤 너의 집 앞 골목길에서',singer:'노을',poster:'//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/302/841/81302841_1573114099166_1_140x140.JPG',state:'상승',id:0,key:'3gaLOtoSs40'},{rank:3,title:'unlucky',singer:'아이유 (IU)',poster:'//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/297/613/81297613_1574066356132_1_140x140.JPG',state:'상승',id:0,key:'l5Rb1pNre40'},{rank:4,title:'시간의 바깥',singer:'아이유 (IU)',poster:'//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/297/613/81297613_1574066356132_1_140x140.JPG',state:'상승',id:0,key:'R3Fwdnij49o'},{rank:5,title:'Love poem',singer:'아이유 (IU)',poster:'//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/297/613/81297613_1574066356132_1_140x140.JPG',state:'유지',id:0,key:'qch5tdUQvYk'},{rank:6,title:'HIP',singer:'마마무(Mamamoo)',poster:'//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/309/776/81309776_1573713705694_1_140x140.JPG',state:'하강',id:0,key:'F4tMI_XcqQ0'},{rank:7,title:'그 사람',singer:'아이유 (IU)',poster:'//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/297/613/81297613_1574066356132_1_140x140.JPG',state:'유지',id:0,key:'yuOMAvrGtxs'},{rank:8,title:'이 번호로 전화해줘',singer:'바이브',poster:'//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/305/010/81305010_1574148594739_1_140x140.JPG',state:'하강',id:0,key:'v7oRIb31DQQ'},{rank:9,title:'자장가',singer:'아이유 (IU)',poster:'//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/297/613/81297613_1574066356132_1_140x140.JPG',state:'하강',id:0,key:'Hck18_59IRk'},{rank:10,title:'어떻게 이별까지 사랑하겠어, 널 사랑하는 거지',singer:'AKMU (악동뮤지션)',poster:'//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/271/853/81271853_1569396403906_1_140x140.JPG',state:'유지',id:0,key:'mZz9uYdj_v4'},{rank:11,title:'흔들리는 꽃들 속에서 네 샴푸향이 느껴진거야',singer:'장범준',poster:'//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/260/027/81260027_1566538606488_1_140x140.JPG',state:'유지',id:0,key:'689GoEBjMhY'},{rank:12,title:'새 사랑',singer:'송하예',poster:'//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/280/600/81280600_1570782050116_1_140x140.JPG',state:'유지',id:0,key:'t1H-Kw-7PGE'}]
        ,filterMusic : []
        ,isOpen:false
        ,musicItem : []
    }
    handleInsert = (msg) =>{
        
        const {music, filterMusic} = this.state
        this.setState({
            filterMusic : music.filter(item => {
                const regexp = new RegExp(msg,'ig')
                return item.title.match(regexp)
            })
        })
    }

    handleOpen = (id) => {
        const {music} = this.state
        this.setState({
            isOpen:true,
            musicItem : music.find(item=>item.rank===id)
        })
    }

    handleClose = () =>{
        this.setState ({
            isOpen:false
        })
    }

    render() {
        const { music , filterMusic, isOpen, musicItem,close} = this.state
        return (
            <div className="Music">
                <h1>지니뮤직</h1>
                <Form onText={this.handleInsert}/>
                <List music = { filterMusic.length >0? filterMusic : music }
                    isOpen={this.handleOpen}/>
                <Modal isOpen={isOpen} musicItem={musicItem} handleClose={this.handleClose}/>
            </div>
        );
    }
}

export default Music;