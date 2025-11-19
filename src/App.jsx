import { useState } from 'react'
import Chat from './components/Chat'
import PrivateChat from './components/PrivateChat'
import GroupChat from './components/GroupChat'
import ChatSubMenu from './components/ChatSubMenu'
import DeleteConversationDialog from './components/DeleteConversationDialog'
import FilesAndVideos from './components/FilesAndVideos'
import MemberList from './components/MemberList'
import AddMember from './components/AddMember'

function App() {
  const [currentPage, setCurrentPage] = useState('chat') // 'chat', 'privateChat', 'groupChat', 'chatSubMenu', 'deleteDialog', 'filesAndVideos', 'memberList', or 'addMember'
  const [returnPage, setReturnPage] = useState('chat') // remembers where submenu/dialog was opened from

  return (
    <div className="w-full h-full flex justify-center items-center bg-gray-100">
      <div className="w-[375px] h-[812px] bg-white shadow-lg overflow-hidden relative">
        {currentPage === 'chat' ? (
          <Chat 
            onNavigateToChat={() => { setCurrentPage('privateChat'); setReturnPage('privateChat'); }}
            onNavigateToGroup={() => { setCurrentPage('groupChat'); setReturnPage('groupChat'); }}
            onNavigateToSubMenu={() => { setCurrentPage('chatSubMenu'); setReturnPage('chat'); }}
          />
        ) : currentPage === 'privateChat' ? (
          <PrivateChat 
            onNavigateBack={() => setCurrentPage('chat')}
            onNavigateToSubMenu={() => { setCurrentPage('chatSubMenu'); setReturnPage('privateChat'); }}
          />
        ) : currentPage === 'groupChat' ? (
          <GroupChat 
            onNavigateBack={() => setCurrentPage('chat')}
            onNavigateToSubMenu={() => { setCurrentPage('chatSubMenu'); setReturnPage('groupChat'); }}
          />
        ) : currentPage === 'chatSubMenu' ? (
          <ChatSubMenu 
            onNavigateBack={() => setCurrentPage(returnPage)}
            onNavigateToDelete={() => setCurrentPage('deleteDialog')}
            onNavigateToFiles={() => setCurrentPage('filesAndVideos')}
            onNavigateToMembers={() => setCurrentPage('memberList')}
            onNavigateToAddMember={() => setCurrentPage('addMember')}
          />
        ) : currentPage === 'deleteDialog' ? (
          <DeleteConversationDialog 
            onNavigateBack={() => setCurrentPage(returnPage)}
            onCloseDialog={() => setCurrentPage('chatSubMenu')}
          />
        ) : currentPage === 'filesAndVideos' ? (
          <FilesAndVideos onNavigateBack={() => setCurrentPage('chatSubMenu')} />
        ) : currentPage === 'memberList' ? (
          <MemberList onNavigateBack={() => setCurrentPage('chatSubMenu')} />
        ) : (
          <AddMember onNavigateBack={() => setCurrentPage('chatSubMenu')} />
        )}
      </div>
    </div>
  )
}

export default App

