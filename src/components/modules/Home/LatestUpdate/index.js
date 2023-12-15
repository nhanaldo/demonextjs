const LatestUpdate = ({ novels }) => {
  return (
    <div>
      <div className=" max-w-[1000px] w-full mx-auto md:block hidden">
        <span className="font-bold uppercase text-[18px]">
          Truyện Mới Cập Nhật
        </span>

        <table className="border-4 mt-2 mb-2">
          {novels.map((itemBody, indexBody) => {
            return (
              <tbody>
                <tr key={indexBody}>
                  <td className="w-1/12">
                    <p className="line-clamp-1">Huyền Nguyễn</p>
                  </td>
                  <td className="w-1/5">
                    <b className="line-clamp-1">{itemBody.title}</b>
                  </td>
                  <td className="w-1/5">
                    <b className="line-clamp-1">{itemBody.title}</b>
                  </td>
                  <td className="w-1/12">
                    <p className="line-clamp-1">Văn Hiên Vũ</p>
                  </td>
                  <td className="w-1/12">
                    <p className="line-clamp-1">Nguyễn Hoàng Bảo</p>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default LatestUpdate;
