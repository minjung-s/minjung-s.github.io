import cv2
import os
from pathlib import Path

# 원본 동영상들이 있는 디렉토리 (필요하면 수정)
src_dir = Path("/mnt/minjung2/minjung-s.github.io/mvcustom_static/videos/custom360/motorcycle409")

# 출력 디렉토리 (같은 곳에 저장하고 싶으면 src_dir 사용)
out_dir = src_dir
out_dir.mkdir(parents=True, exist_ok=True)

for video_path in src_dir.glob("*.mp4"):
    print(f"Processing: {video_path.name}")

    cap = cv2.VideoCapture(str(video_path))
    if not cap.isOpened():
        print(f"  -> Failed to open {video_path}")
        continue

    # 원본 특성 가져오기
    fps = cap.get(cv2.CAP_PROP_FPS)
    width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
    frame_size = (width, height)

    # 코덱 설정 (mp4v, 필요 시 다른 코덱으로 변경 가능)
    fourcc = cv2.VideoWriter_fourcc(*"mp4v")

    # 새 파일 이름 설정: 원본이 A.mp4 -> A_new.mp4
    new_name = f"{video_path.stem}_new.mp4"
    out_path = out_dir / new_name

    out = cv2.VideoWriter(str(out_path), fourcc, fps, frame_size)

    while True:
        ret, frame = cap.read()
        if not ret:
            break
        out.write(frame)

    cap.release()
    out.release()

    print(f"  -> Saved as {out_path.name}")

print("Done.")