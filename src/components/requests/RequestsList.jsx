import RequestCard from "./RequestCard";

const RequestsList = ({ requests, type, onReject, onMakeFriend, onAcceptDate, onCancel }) => {
  if (!requests.length) {
    return (
      <div className="rounded-[22px] border border-[#45413c] bg-[#302d29] px-6 py-14 text-center">
        <p className="text-base font-semibold text-[#eee9e2]">
          No {type} requests
        </p>
        <p className="mt-2 text-sm text-[#aaa39a]">
          {type === "received"
            ? "New connection requests will show up here."
            : "Requests you send will appear here while they are pending."}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {requests.map((request) => (
        <RequestCard
          key={request.id}
          request={request}
          type={type}
          onReject={onReject}
          onMakeFriend={onMakeFriend}
          onAcceptDate={onAcceptDate}
          onCancel={onCancel}
        />
      ))}
    </div>
  );
};

export default RequestsList;
