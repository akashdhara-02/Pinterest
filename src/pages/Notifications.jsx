import React from "react";
import { RxCross2 } from 'react-icons/rx';
import { Link } from "react-router-dom";

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      title: "New follower",
      desc: "Alex started following you",
      time: "2m ago",
      type: "follow",
    },
    {
      id: 2,
      title: "New like",
      desc: "Your pin received a like",
      time: "10m ago",
      type: "like",
    },
    {
      id: 3,
      title: "Comment",
      desc: "Someone commented on your post",
      time: "1h ago",
      type: "comment",
    },
    {
      id: 4,
      title: "System update",
      desc: "New features added to your dashboard",
      time: "1d ago",
      type: "system",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">

      {/* Close Button */}
      <Link to="/home" className="absolute top-4 right-4">   <RxCross2 size={24} /></Link>

      <div className="w-full max-w-2xl">


        {/* Header */}
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Notifications
        </h1>

        {/* Notification List */}
        <div className="space-y-3">

          {notifications.map((n) => (
            <div
              key={n.id}
              className="bg-white p-4 rounded-xl shadow hover:shadow-md transition flex justify-between items-start"
            >

              {/* Left Content */}
              <div>
                <h2 className="font-semibold text-gray-800">
                  {n.title}
                </h2>
                <p className="text-sm text-gray-500">{n.desc}</p>
              </div>

              {/* Right Time */}
              <span className="text-xs text-gray-400">{n.time}</span>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default Notifications;