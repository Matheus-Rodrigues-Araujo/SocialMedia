import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import Axios from 'axios'
export const Welcome = () => {
    const auth = useSelector((state) => state.user.auth)
    const [usersList, setUsersList] = useState([])  
    const serverConnection = () =>{
        const url = 'http://localhost:4000/api';
        const config= {'content-type': 'application/json'}
        Axios.get(url, config).then(res => {
        setUsersList(res.data)
        })
    }
    const filteredUsers = usersList.filter(user => user._id !== auth._id)
    
    useEffect(()=>{
        serverConnection()
    }, [])
    return (
        <div className="welcome-content" >
            <div className="greetings" >
                <h1>Hello, {auth.username}</h1>
                <p>It's always a pleasure to have you!</p>
            </div>
            <h3 style={{fontSize: '1.5em'}}  >Dashboard</h3>
            <ul className="users-list" >
                {filteredUsers.map((e, key)=> (
                    <li className='user' key={key}>
                    <p className="username">@{e.username}</p>
                    <p>Email: {e.email}</p>
                    </li>
                ))}
            </ul>
            <div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed faucibus turpis in eu mi bibendum. Pellentesque dignissim enim sit amet venenatis urna cursus. Urna duis convallis convallis tellus id interdum velit laoreet id. Tempor orci eu lobortis elementum nibh tellus molestie nunc non. Facilisi etiam dignissim diam quis enim lobortis scelerisque. Venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam. Sit amet dictum sit amet justo donec. Proin sed libero enim sed faucibus turpis in eu. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Facilisi etiam dignissim diam quis enim lobortis. Diam volutpat commodo sed egestas egestas. Quis risus sed vulputate odio ut enim. Odio facilisis mauris sit amet massa. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Pharetra convallis posuere morbi leo urna molestie at.

            Justo nec ultrices dui sapien eget mi proin sed libero. Vitae et leo duis ut diam quam nulla. Arcu dui vivamus arcu felis bibendum ut. Nulla pellentesque dignissim enim sit amet venenatis urna cursus. Magna etiam tempor orci eu lobortis elementum nibh tellus. Nisl tincidunt eget nullam non nisi est sit amet. Amet nulla facilisi morbi tempus iaculis urna. Pretium lectus quam id leo in vitae turpis massa sed. Dolor morbi non arcu risus quis. Eget nunc lobortis mattis aliquam. Sed elementum tempus egestas sed sed. Scelerisque eleifend donec pretium vulputate sapien nec. Fermentum odio eu feugiat pretium nibh ipsum consequat.

            Sodales neque sodales ut etiam sit amet nisl purus in. Id eu nisl nunc mi ipsum faucibus vitae aliquet nec. In arcu cursus euismod quis. Risus ultricies tristique nulla aliquet enim tortor at auctor. Pretium lectus quam id leo in vitae turpis. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. Tellus at urna condimentum mattis pellentesque id. Lacus vestibulum sed arcu non odio euismod lacinia. Odio facilisis mauris sit amet massa. Sit amet dictum sit amet.

            Nibh venenatis cras sed felis eget velit aliquet. Neque ornare aenean euismod elementum nisi. Nec ullamcorper sit amet risus nullam eget felis eget. Et tortor at risus viverra adipiscing at in tellus. Est ultricies integer quis auctor elit sed vulputate. Leo duis ut diam quam nulla porttitor. Maecenas accumsan lacus vel facilisis volutpat est velit egestas. Tincidunt tortor aliquam nulla facilisi cras fermentum. In arcu cursus euismod quis viverra nibh. Sit amet dictum sit amet justo donec enim diam vulputate. Rhoncus est pellentesque elit ullamcorper. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Eget arcu dictum varius duis at consectetur lorem donec massa. Duis at consectetur lorem donec massa sapien faucibus et. Massa eget egestas purus viverra accumsan in nisl nisi. Lorem donec massa sapien faucibus et. Posuere ac ut consequat semper.

            Ultrices gravida dictum fusce ut placerat orci nulla. Nec feugiat in fermentum posuere urna nec tincidunt praesent semper. Sagittis id consectetur purus ut faucibus pulvinar. Ornare suspendisse sed nisi lacus sed viverra tellus in. Enim praesent elementum facilisis leo vel. Nec nam aliquam sem et tortor. Sit amet porttitor eget dolor. Elit at imperdiet dui accumsan sit amet nulla. Quis risus sed vulputate odio ut enim blandit. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Risus ultricies tristique nulla aliquet enim tortor at auctor. Leo duis ut diam quam nulla porttitor massa id neque. Quam adipiscing vitae proin sagittis. Elementum integer enim neque volutpat. Suspendisse interdum consectetur libero id faucibus nisl. Mauris ultrices eros in cursus turpis massa tincidunt dui. Sem nulla pharetra diam sit amet.

            Morbi tristique senectus et netus et malesuada fames ac turpis. Nisl tincidunt eget nullam non. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam. Sed viverra ipsum nunc aliquet bibendum enim. At tempor commodo ullamcorper a lacus. Varius sit amet mattis vulputate enim nulla aliquet. Odio eu feugiat pretium nibh ipsum consequat nisl vel. Vulputate dignissim suspendisse in est ante in nibh mauris. Sit amet risus nullam eget felis eget nunc lobortis. Ultricies integer quis auctor elit sed vulputate. Tempor nec feugiat nisl pretium fusce. Quam vulputate dignissim suspendisse in est ante in nibh mauris. Tortor posuere ac ut consequat semper viverra nam. Vestibulum mattis ullamcorper velit sed ullamcorper. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus.

            Purus in massa tempor nec. Purus ut faucibus pulvinar elementum integer enim neque volutpat. Eget mauris pharetra et ultrices neque. Netus et malesuada fames ac turpis egestas maecenas. Dui ut ornare lectus sit amet est placerat in egestas. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Dui sapien eget mi proin sed libero. Convallis a cras semper auctor neque vitae. Cras pulvinar mattis nunc sed blandit libero volutpat. Urna neque viverra justo nec ultrices dui sapien. Ac ut consequat semper viverra. Feugiat nisl pretium fusce id velit ut tortor pretium.

            Magna sit amet purus gravida quis blandit turpis. Eget arcu dictum varius duis at consectetur lorem donec. Eu non diam phasellus vestibulum lorem sed risus ultricies tristique. Pellentesque habitant morbi tristique senectus et. Bibendum enim facilisis gravida neque convallis a. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Donec ac odio tempor orci dapibus ultrices in iaculis nunc. Donec adipiscing tristique risus nec feugiat in fermentum. Urna molestie at elementum eu. At varius vel pharetra vel. In mollis nunc sed id semper risus in. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Libero enim sed faucibus turpis in eu mi bibendum neque. Facilisis gravida neque convallis a cras semper auctor neque. Suscipit tellus mauris a diam. Non blandit massa enim nec dui nunc. Tincidunt dui ut ornare lectus sit. Pharetra diam sit amet nisl suscipit adipiscing bibendum est. Aliquet risus feugiat in ante metus dictum at tempor.
            </p>
            </div>
            <div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed faucibus turpis in eu mi bibendum. Pellentesque dignissim enim sit amet venenatis urna cursus. Urna duis convallis convallis tellus id interdum velit laoreet id. Tempor orci eu lobortis elementum nibh tellus molestie nunc non. Facilisi etiam dignissim diam quis enim lobortis scelerisque. Venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam. Sit amet dictum sit amet justo donec. Proin sed libero enim sed faucibus turpis in eu. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Facilisi etiam dignissim diam quis enim lobortis. Diam volutpat commodo sed egestas egestas. Quis risus sed vulputate odio ut enim. Odio facilisis mauris sit amet massa. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Pharetra convallis posuere morbi leo urna molestie at.

            Justo nec ultrices dui sapien eget mi proin sed libero. Vitae et leo duis ut diam quam nulla. Arcu dui vivamus arcu felis bibendum ut. Nulla pellentesque dignissim enim sit amet venenatis urna cursus. Magna etiam tempor orci eu lobortis elementum nibh tellus. Nisl tincidunt eget nullam non nisi est sit amet. Amet nulla facilisi morbi tempus iaculis urna. Pretium lectus quam id leo in vitae turpis massa sed. Dolor morbi non arcu risus quis. Eget nunc lobortis mattis aliquam. Sed elementum tempus egestas sed sed. Scelerisque eleifend donec pretium vulputate sapien nec. Fermentum odio eu feugiat pretium nibh ipsum consequat.

            Sodales neque sodales ut etiam sit amet nisl purus in. Id eu nisl nunc mi ipsum faucibus vitae aliquet nec. In arcu cursus euismod quis. Risus ultricies tristique nulla aliquet enim tortor at auctor. Pretium lectus quam id leo in vitae turpis. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. Tellus at urna condimentum mattis pellentesque id. Lacus vestibulum sed arcu non odio euismod lacinia. Odio facilisis mauris sit amet massa. Sit amet dictum sit amet.

            Nibh venenatis cras sed felis eget velit aliquet. Neque ornare aenean euismod elementum nisi. Nec ullamcorper sit amet risus nullam eget felis eget. Et tortor at risus viverra adipiscing at in tellus. Est ultricies integer quis auctor elit sed vulputate. Leo duis ut diam quam nulla porttitor. Maecenas accumsan lacus vel facilisis volutpat est velit egestas. Tincidunt tortor aliquam nulla facilisi cras fermentum. In arcu cursus euismod quis viverra nibh. Sit amet dictum sit amet justo donec enim diam vulputate. Rhoncus est pellentesque elit ullamcorper. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Eget arcu dictum varius duis at consectetur lorem donec massa. Duis at consectetur lorem donec massa sapien faucibus et. Massa eget egestas purus viverra accumsan in nisl nisi. Lorem donec massa sapien faucibus et. Posuere ac ut consequat semper.

            Ultrices gravida dictum fusce ut placerat orci nulla. Nec feugiat in fermentum posuere urna nec tincidunt praesent semper. Sagittis id consectetur purus ut faucibus pulvinar. Ornare suspendisse sed nisi lacus sed viverra tellus in. Enim praesent elementum facilisis leo vel. Nec nam aliquam sem et tortor. Sit amet porttitor eget dolor. Elit at imperdiet dui accumsan sit amet nulla. Quis risus sed vulputate odio ut enim blandit. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Risus ultricies tristique nulla aliquet enim tortor at auctor. Leo duis ut diam quam nulla porttitor massa id neque. Quam adipiscing vitae proin sagittis. Elementum integer enim neque volutpat. Suspendisse interdum consectetur libero id faucibus nisl. Mauris ultrices eros in cursus turpis massa tincidunt dui. Sem nulla pharetra diam sit amet.

            Morbi tristique senectus et netus et malesuada fames ac turpis. Nisl tincidunt eget nullam non. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam. Sed viverra ipsum nunc aliquet bibendum enim. At tempor commodo ullamcorper a lacus. Varius sit amet mattis vulputate enim nulla aliquet. Odio eu feugiat pretium nibh ipsum consequat nisl vel. Vulputate dignissim suspendisse in est ante in nibh mauris. Sit amet risus nullam eget felis eget nunc lobortis. Ultricies integer quis auctor elit sed vulputate. Tempor nec feugiat nisl pretium fusce. Quam vulputate dignissim suspendisse in est ante in nibh mauris. Tortor posuere ac ut consequat semper viverra nam. Vestibulum mattis ullamcorper velit sed ullamcorper. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus.

            Purus in massa tempor nec. Purus ut faucibus pulvinar elementum integer enim neque volutpat. Eget mauris pharetra et ultrices neque. Netus et malesuada fames ac turpis egestas maecenas. Dui ut ornare lectus sit amet est placerat in egestas. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Dui sapien eget mi proin sed libero. Convallis a cras semper auctor neque vitae. Cras pulvinar mattis nunc sed blandit libero volutpat. Urna neque viverra justo nec ultrices dui sapien. Ac ut consequat semper viverra. Feugiat nisl pretium fusce id velit ut tortor pretium.

            Magna sit amet purus gravida quis blandit turpis. Eget arcu dictum varius duis at consectetur lorem donec. Eu non diam phasellus vestibulum lorem sed risus ultricies tristique. Pellentesque habitant morbi tristique senectus et. Bibendum enim facilisis gravida neque convallis a. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Donec ac odio tempor orci dapibus ultrices in iaculis nunc. Donec adipiscing tristique risus nec feugiat in fermentum. Urna molestie at elementum eu. At varius vel pharetra vel. In mollis nunc sed id semper risus in. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Libero enim sed faucibus turpis in eu mi bibendum neque. Facilisis gravida neque convallis a cras semper auctor neque. Suscipit tellus mauris a diam. Non blandit massa enim nec dui nunc. Tincidunt dui ut ornare lectus sit. Pharetra diam sit amet nisl suscipit adipiscing bibendum est. Aliquet risus feugiat in ante metus dictum at tempor.
            </p>
            </div>
        </div>
    )
}